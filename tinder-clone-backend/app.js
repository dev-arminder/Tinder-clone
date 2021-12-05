const express = require("express");

// app instance
const app = express();

app.get("/", (req, res) => {
  res.status(200).send("Hello World");
});

module.exports = app;
