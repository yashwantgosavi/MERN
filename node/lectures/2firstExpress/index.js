const express = require("express");
const path = require("path");
const port = 8000;

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", function (req, res) {
  return res.render("home", {title:"My Contact list"});
});

app.listen(port, function (err) {
  console.log("I am watching");
});