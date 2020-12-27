const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const multipart = require("connect-multiparty");
const jwt = require("jsonwebtoken");

const routerTodos = express.Router();

// Multiparty Middleware
const multipartMiddleware = multipart();

// User Related transactions
const routerUsers = require("./users");

//Database
DB = "./database/testme.db";

// CREATE TODO
routerTodos.post("/create", multipartMiddleware, checkToken, (req, res) => {
  const user = req.user;
  let errors = [];

  // validate data
  if (user == null) errors.push("Not valid token! You cannot create todo");

  if (isEmpty(req.body.todo)) {
    errors.push("No task specified");
  }
  //   if (isEmpty(req.params.id)) {
  //     errors.push("No user specified");
  //   }
  //   if (user.id !== req.params.id) {
  //     errors.push("Wrong request- user not authorized!");
  //   }
  if (errors.length) {
    res.status(401).json({
      status: false,
      message: errors.join(", "),
    });
    return;
  }

  let db = new sqlite3.Database(DB);

  const data = {
    todo: req.body.todo,
    status: false,
    userId: user.id,
  };
  const sql = "INSERT INTO todos (todo, user_id, status) VALUES (?,?,?)";
  const params = [data.todo, data.userId, data.status];
  db.run(sql, params, function (err) {
    if (err) {
      res.status(400).json({
        status: false,
        message: err.message,
      });
      return;
    }
    res.status(201).json({
      message: "todo created",
      data: data,
      id: this.lastID,
    });
  });
});

// GET ALL TODOS
routerTodos.get("/", multipartMiddleware, function (req, res) {
  let db = new sqlite3.Database("./database/InvoicingApp.db");
  // let sql = `SELECT * FROM todos
  // WHERE user_id='${req.params.user_id}'`;

  let sql = `SELECT * FROM todos`;

  // LEFT JOIN transactions ON invoices.id=transactions.invoice_id
  db.all(sql, [], (err, rows) => {
    if (err) {
      throw err;
    }
    return res.json({
      status: true,
      todos: rows,
    });
  });
});

//DELETE TODO
routerTodos.delete("/:id", multipartMiddleware, (req, res, next) => {
  let db = new sqlite3.Database("./database/InvoicingApp.db");
  db.run(
    "DELETE FROM todos WHERE id = ?",
    req.params.id,
    function (err, result) {
      if (err) {
        res.status(400).json({ error: res.message });
        return;
      }
      res.json({ message: "deleted", changes: this.changes });
    }
  );
});

//UPDATE TODO STATUS
routerTodos.patch("/:id", (req, res) => {
  const db = new sqlite3.Database("./database/InvoicingApp.db");
  // validate data
  // console.log(req.params.id);
  // console.log(req.body.todoStatus);
  if (isEmpty(req.body.todoStatus)) {
    return res.status(400).json({
      status: false,
      message: "No status specified",
    });
  }

  const todoStatus = req.body.todoStatus;

  const sql = "UPDATE todos set status = ? WHERE id = ?";
  const params = [todoStatus, req.params.id];

  db.run(sql, params, function (err) {
    if (err) {
      res.status(400).json({ error: res.message });
      return;
    }
    res.json({
      message: "success",
      changes: this.changes,
    });
  });
});

/***********************************
 ************** HELPER *************
 ***********************************/

function isEmpty(strIn) {
  return !strIn || 0 === strIn.length;
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

    next();
  });
}

module.exports = routerTodos;
