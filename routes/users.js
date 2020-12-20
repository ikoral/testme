const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const multipart = require("connect-multiparty");
const bcrypt = require("bcrypt");
const saltRounds = 10;

const routerUsers = express.Router();

// Multiparty Middleware
const multipartMiddleware = multipart();

function isEmpty(str) {
  return !str || 0 === str.length;
}

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
    let db = new sqlite3.Database("./database/testme.db");
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

module.exports = routerUsers;
