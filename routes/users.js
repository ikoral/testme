require("dotenv").config();

const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const multipart = require("connect-multiparty");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const jwt = require("jsonwebtoken");

const sendEmail = require("../mail-server");

// Create Express Router Object for Users
const routerUsers = express.Router();

// Multiparty Middleware
const multipartMiddleware = multipart();

// Helper Function
function isEmpty(str) {
  return !str || 0 === str.length;
}

//Database
DB = "./database/testme.db";

// REGISTER USER
routerUsers.post("/register", multipartMiddleware, function (req, res) {
  // check to make sure none of the fields are empty
  if (
    isEmpty(req.body.first_name) ||
    isEmpty(req.body.last_name) ||
    isEmpty(req.body.email) ||
    isEmpty(req.body.password)
  ) {
    return res.json({
      status: false,
      message: "All fields are required",
    });
  }
  // any other intended checks

  bcrypt.hash(req.body.password, saltRounds, function (err, hash) {
    let db = new sqlite3.Database(DB);
    let sql = `INSERT INTO users(firstName,lastName,email,password) VALUES('${req.body.first_name}','${req.body.last_name}','${req.body.email}','${hash}')`;
    db.run(sql, function (err) {
      if (err) {
        // throw err;
        return res.status(400).json({
          status: false,
          message: err.message,
        });
      } else {
        return res.json({
          status: true,
          message: "User Created",
        });
      }
    });
    db.close();
  });
});

// GET USERS
routerUsers.get("/", authenticateToken, function (req, res) {
  let db = new sqlite3.Database(DB);
  let sql = `SELECT * FROM users`;
  db.all(sql, [], (err, rows) => {
    if (err) {
      throw err;
    }
    return res.json({
      status: true,
      users: rows,
    });
  });
});

// RESET Password
routerUsers.post("/reset", function (req, res) {
  // check to make sure none of the fields are empty
  if (isEmpty(req.body.password) || isEmpty(req.body.password_confirm)) {
    return res.status(401).json({
      status: false,
      message: "Password field are required",
    });
  }

  console.log("pass field checked");

  if (isEmpty(req.body.token)) {
    return res.status(401).json({
      status: false,
      message: "Reset token is not provided",
    });
  }

  const token = req.body.token;

  //check reset Token
  jwt.verify(token, process.env.RESET_TOKEN_SECRET, (err, user) => {
    if (err) {
      req.user = null;
    } else {
      req.user = user;
    }
  });

  const user = req.user;
  if (user == null)
    return res.status(401).json({
      status: false,
      message: "Not has valid token to renew password!",
    });

  let db = new sqlite3.Database(DB);
  let sqlIsUser = `SELECT firstName, lastName, email from users where email='${user.email}'`;

  // Check is user really in DB
  db.all(sqlIsUser, [], (err, rows) => {
    if (err) {
      throw err;
    }
    db.close();
    if (rows.length == 0) {
      return res.status(401).json({
        status: false,
        message: "Sorry, wrong email",
      });
    }
    // let user = rows[0];
  });

  bcrypt.hash(req.body.password, saltRounds, function (err, hash) {
    let db = new sqlite3.Database(DB);
    let sql = `UPDATE users set password = '${hash}' where email='${user.email}'`;
    db.run(sql, function (err) {
      if (err) {
        // throw err;
        return res.status(400).json({
          status: false,
          message: err.message,
        });
      } else {
        return res.status(201).json({
          status: true,
          email: user.email,
          message: "Password Changed",
        });
      }
    });
    db.close();
  });
});

// CHECK USER
routerUsers.get("/user", checkToken, function (req, res) {
  const user = req.user;
  if (user == null)
    return res.status(203).json({
      status: false,
      message: "Not has valid token! Continue as anonymous user",
    });

  return res.status(200).json({
    user,
  });
});

// SEND EMAIL
routerUsers.post("/forgot", function (req, res) {
  if (isEmpty(req.body.email)) {
    return res.status(400).json({
      status: false,
      message: "email is required",
    });
  }

  const user = {
    email: req.body.email,
  };

  url = process.env.RESET_URL || "http://localhost:3000/reset";
  const resetToken = jwt.sign(user, process.env.RESET_TOKEN_SECRET, {
    expiresIn: "15m",
  });

  const html = `<h2>Change your password</h2>
  <br>
  <p>You can change your password using this link <a href=${url}/${resetToken}>here</a></p>`;

  const email = {
    host: process.env.SMTP_HOST || "167.86.107.223",
    from: "support@chinook.com",
    to: req.body.email,
    subject: "Reset Your Password ✔",
    html: html,
  };

  sendEmail(email);
  return res.json({
    status: true,
    message: "Reset token was sent",
    token: resetToken,
  });
});

// LOGIN
routerUsers.post("/login", function (req, res) {
  if (isEmpty(req.body.email) || isEmpty(req.body.password)) {
    return res.json({
      status: false,
      message: "All fields are required",
    });
  }

  let db = new sqlite3.Database(DB);
  let sql = `SELECT firstName, lastName, email, password, roleid  from users where email='${req.body.email}'`;
  db.all(sql, [], (err, rows) => {
    if (err) {
      throw err;
    }
    db.close();
    if (rows.length == 0) {
      return res.status(401).json({
        status: false,
        message: "Sorry, wrong email",
      });
    }

    let user = rows[0];
    let authenticated = bcrypt.compareSync(req.body.password, user.password);
    delete user.password;
    if (authenticated) {
      const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: "15m",
      });

      return res.json({
        status: true,
        token: accessToken,
        user: user,
      });
    }

    return res.status(401).json({
      status: false,
      message: "Wrong Password, please retry",
    });
  });
});

// JWT Authentication Middleware
// TODO: work on those response.
function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null) return res.sendStatus(401);

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err)
      return res.status(403).json({
        status: false,
        message: "Credential hasn't provided!",
      });
    req.user = user;
    next();
  });
}

function checkToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null) return res.sendStatus(204);

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) {
      req.user = null;
    } else {
      req.user = user;
    }
    // return res.status(203).json({
    //   status: false,
    //   message: "Credential hasn't provided!",
    // });

    next();
  });
}

module.exports = routerUsers;
