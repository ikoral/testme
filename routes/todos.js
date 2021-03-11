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
  db.close();
});

// GET ALL TODOS
routerTodos.get("/", multipartMiddleware, checkToken, function (req, res) {
  const user = req.user;
  let errors = [];

  // validate data
  if (user == null) errors.push("Not valid token! You cannot get todos");

  if (errors.length) {
    res.status(401).json({
      status: false,
      message: errors.join(", "),
    });
    return;
  }

  let db = new sqlite3.Database(DB);
  let sql = `SELECT * FROM todos
  WHERE user_id='${req.user.id}'`;

  db.all(sql, [], (err, rows) => {
    if (err) {
      res.status(401).json({
        status: false,
        message: err.message,
      });
      return;
    }
    return res.status(200).json({
      status: true,
      todos: rows,
    });
  });
  db.close();
});

// GET TODO BY ID
routerTodos.get("/:id", multipartMiddleware, checkToken, function (req, res) {
  const user = req.user;
  let errors = [];

  // validate data
  if (user == null) errors.push("Not valid token! You cannot get this todo");

  if (errors.length) {
    res.status(401).json({
      status: false,
      message: errors.join(", "),
    });
    return;
  }

  let db = new sqlite3.Database(DB);
  let sql = `SELECT todo FROM todos
  WHERE user_id='${req.user.id}' and id = '${req.params.id}'`;

  db.all(sql, [], (err, rows) => {
    if (err) {
      res.status(401).json({
        status: false,
        message: err.message,
      });
      return;
    }
    return res.status(200).json({
      status: true,
      todos: rows,
    });
  });
  db.close();
});

//DELETE TODO
routerTodos.delete(
  "/:id",
  multipartMiddleware,
  checkToken,
  async function (req, res) {
    if (req.user == null) {
      return res.status(401).json({
        status: false,
        message: "You haven't provided valid credential to delete todo!",
      });
    }
    const todos = await checkTodo(req.user.id);
    //console.log("delete todo", todos);
    const todo = todos.filter((todo) => todo.id == req.params.id);
    if (!todo.length)
      return res.status(401).json({
        status: false,
        message: "You may not have this todo or it doesn't exist!",
      });
    // const result = await resolveAfter2Seconds();
    // console.log(result);
    try {
      const result = await deleteTodo(todo[0].id);
      return res.status(result[0]).json(result[1]);
    } catch (err) {
      return res.status(400).json({
        status: false,
        message: "Error occurred during delete!",
      });
    }
  }
);

//UPDATE TODO STATUS
routerTodos.patch(
  "/:id",
  multipartMiddleware,
  checkToken,
  async function (req, res) {
    if (req.user == null) {
      return res.status(401).json({
        status: false,
        message: "You haven't provided valid credential to update todo!",
      });
    }

    if (isEmpty(req.body.todoStatus)) {
      return res.status(400).json({
        status: false,
        message: "No status specified",
      });
    }

    const todos = await checkTodo(req.user.id);
    const todo = todos.filter((todo) => todo.id == req.params.id);
    if (!todo.length)
      return res.status(401).json({
        status: false,
        message: "You may not have this todo or it doesn't exist!",
      });

    const params = [req.body.todoStatus, req.params.id];
    try {
      const result = await updateTodo(params);
      return res.status(result[0]).json(result[1]);
    } catch (err) {
      return res.status(400).json({
        status: false,
        message: "Error occurred during update!",
      });
    }
  }
);

//UPDATE TODO BY ID
routerTodos.put(
  "/:id",
  multipartMiddleware,
  checkToken,
  async function (req, res) {
    if (req.user == null) {
      return res.status(401).json({
        status: false,
        message: "You haven't provided valid credential to update todo!",
      });
    }

    if (isEmpty(req.body.todo)) {
      return res.status(400).json({
        status: false,
        message: "No task (todo) specified",
      });
    }

    const todos = await checkTodo(req.user.id);
    const todo = todos.filter((todo) => todo.id == req.params.id);
    if (!todo.length)
      return res.status(401).json({
        status: false,
        message: "You may not have this todo or it doesn't exist!",
      });

    const params = [req.body.todo, req.params.id];
    try {
      const result = await updateTodoTask(params);
      return res.status(result[0]).json(result[1]);
    } catch (err) {
      return res.status(400).json({
        status: false,
        message: "Error occurred during update!",
      });
    }
  }
);

//MARK ALL TODOS STATUS
routerTodos.put(
  "/status/all",
  multipartMiddleware,
  checkToken,
  async function (req, res) {
    if (req.user == null) {
      return res.status(401).json({
        status: false,
        message: "You haven't provided valid credential to update todo!",
      });
    }

    if (isEmpty(req.body.allStatus)) {
      return res.status(400).json({
        status: false,
        message: "No status specified",
      });
    }

    const params = [req.body.allStatus, req.user.id];
    let db = new sqlite3.Database(DB);
    let sql = "UPDATE todos set status = ? WHERE user_id = ?";

    db.run(sql, params, function (err) {
      if (err) {
        res.status(400).json({
          status: false,
          message: err.message,
        });
        return;
      }
      res.status(201).json({
        message: "All todos status updated",
        status: req.body.allStatus,
      });
    });

    db.close();
  }
);

//DELETE ALL TODOS
routerTodos.delete(
  "/del/all",
  multipartMiddleware,
  checkToken,
  async function (req, res) {
    if (req.user == null) {
      return res.status(401).json({
        status: false,
        message: "You haven't provided valid credential to delete all todo!",
      });
    }

    let db = new sqlite3.Database(DB);
    try {
      db.run("DELETE FROM todos WHERE user_id = ?", req.user.id, function () {
        res.status(200).json({
          message: "All todos deleted",
        });
      });
    } catch (err) {
      return res.status(400).json({
        status: false,
        message: `Error occurred during delete all todos!: ${err.message}`,
      });
    }
    db.close();
  }
);

/***********************************
 ************** HELPER *************
 ***********************************/

function isEmpty(strIn) {
  return !strIn || 0 === strIn.length;
}

function checkToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null) {
    req.user = null; //res.sendStatus(401);
    next();
  } else {
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
      if (err) {
        req.user = null;
      } else {
        req.user = user;
      }
      next();
    });
  }
}

function checkTodo(user_id) {
  return new Promise((resolve) => {
    //TODO: Check if this todo belongs to this user
    let db = new sqlite3.Database(DB);
    let sql = "SELECT * from todos WHERE user_id = ?";
    let todos = [];

    db.all(sql, user_id, function (err, rows) {
      if (err) {
        // errors.push("Error ocurred");
        todos = null;
      }
      todos = resolve(rows);
    });

    db.close();
    return todos;
  });
}

function deleteTodo(id) {
  return new Promise((resolve) => {
    let message = [];
    let db = new sqlite3.Database(DB);
    db.run("DELETE FROM todos WHERE id = ?", id, function (err) {
      message = resolve([
        201,
        { todo_id: id, message: "deleted", changes: this.changes },
      ]);
      db.close();
    });
  });
}

function updateTodo(params) {
  return new Promise((resolve) => {
    let message = [];
    let db = new sqlite3.Database(DB);
    db.run("UPDATE todos set status = ? WHERE id = ?", params, function () {
      // TODO: if error occurred add error message to resolve here (check reject-resolve)
      message = resolve([
        201,
        {
          todo_id: params[1],
          message: "status changed",
          changes: this.changes,
        },
      ]);
      db.close();
    });
  });
}

function updateTodoTask(params) {
  return new Promise((resolve) => {
    let message = [];
    let db = new sqlite3.Database(DB);
    db.run("UPDATE todos set todo = ? WHERE id = ?", params, function () {
      // TODO: if error occurred add error message to resolve here (check reject-resolve)
      message = resolve([
        201,
        {
          todo_id: params[1],
          message: "todo changed",
          changes: this.changes,
        },
      ]);
      db.close();
    });
  });
}

function resolveAfter2Seconds() {
  return new Promise((resolve) => {
    resolve("resolved");
  });
}

module.exports = routerTodos;
