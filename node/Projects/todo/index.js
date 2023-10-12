const express = require("express");
const app = express();
const port = 8000;


// use express router
app.use('/', require('./routes'));





// server setup
app.listen(port, function (err) {
  if (err) {
    console.log(err);
    return;
  }
  console.log("server is running on port:", port);
});
