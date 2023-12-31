const express = require("express");
const app = express();
const port = 8000;
const expressLayouts = require("express-ejs-layouts");
const db = require("./config/mongoose");
const session = require('express-session');
const passport = require('passport');
const cookieParser = require("cookie-parser");

// used for session cookie
const passportLocal = require("./config/passport-local-strategy");

app.use(express.static("./assets"));
app.use(express.urlencoded());
app.use(cookieParser());
app.use(expressLayouts);
// extract style and scripts from sub pages into the layout
app.set("layout extractStyles", true);
app.set("layout extractScripts", true);

// use express router
app.use("/", require("./routes"));

// set up the view engine
app.set("view engine", "ejs");
app.set("views", "./views");

app.use(
  session({
    name: "codeil",
    // todo change the secreat before deployment
    secret: "blahsomething",
    saveUnitialized: false,
    resave:false,
    // this object will expired the cookie after some time
    cookie:{
        maxAge:(1000*60*100)
    }
  })
);

app.use(passport.initialize());
app.use(passport.session());


app.listen(port, function (err) {
  if (err) {
    console.log(`Error in running the server: ${err}`);
  }
  console.log(`Server is running on port: ${port}`);
});