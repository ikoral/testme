const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const multipart = require("connect-multiparty");
const bcrypt = require("bcrypt");
const saltRounds = 10;

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
routerUsers.get("/", multipartMiddleware, function (req, res) {
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

// LOGIN
routerUsers.post("/login", function (req, res) {
  if (isEmpty(req.body.email) || isEmpty(req.body.password)) {
    return res.json({
      status: false,
      message: "All fields are required",
    });
  }

  let db = new sqlite3.Database(DB);
  let sql = `SELECT * from users where email='${req.body.email}'`;
  db.all(sql, [], (err, rows) => {
    if (err) {
      throw err;
    }
    db.close();
    if (rows.length == 0) {
      return res.json({
        status: false,
        message: "Sorry, wrong email",
      });
    }

    let user = rows[0];
    let authenticated = bcrypt.compareSync(req.body.password, user.password);
    delete user.password;
    if (authenticated) {
      return res.json({
        status: true,
        user: user,
      });
    }

    return res.json({
      status: false,
      message: "Wrong Password, please retry",
    });
  });
});

module.exports = routerUsers;
