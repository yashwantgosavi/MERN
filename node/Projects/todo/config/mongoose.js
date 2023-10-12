const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/todo_development");

const db = mongoose.connection;
db.on("error", console.error.bind(console, "Error Connecting to MongoDb"));

db.once("open", function () {
  console.log("connected to database:: MongoDB");
});

module.exports = db;
