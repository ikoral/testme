const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

// create express app
const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// Identify Routes
const users = require("./routes/users");
app.use("/api/users", users);

//Handle Production
if (process.env.NODE_ENV === "production") {
  // Static Folder
  app.use(express.static(path.join(__dirname, "public")));

  //Handle SPA
  app.get(/.*/, (req, res) => res.sendFile(__dirname + "/public/index.html"));
}

// Set Application Port
const PORT = process.env.PORT || 5000;

// GET MAIN
app.get("/", function (req, res) {
  res.send("Welcome to Chinook Enterprise");
});

// serialize random characters
// require('crypto').randomBytes(64).toString('hex')

app.listen(PORT, function () {
  console.log(`App running on localhost:${PORT}`);
});
