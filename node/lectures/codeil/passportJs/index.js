// https://www.passportjs.org/
const express = require('express');
const app = express();
const port = 8000;
const expressLayouts = require('express-ejs-layouts');
const db = require('./config/mongoose');
const cookieParser = require('cookie-parser');
// Used for session cookie
const session = require('express-session');
const passport =require('passport');
const passportLocal = require('./config/passport-local-strategy');


app.use(express.static('./assets'));
app.use(express.urlencoded());
app.use(cookieParser());
app.use(expressLayouts);
// extract style and scripts from sub pages into the layout
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);


// use express router
app.use('/', require('./routes'));

app.use (session({
name:'codeial',
// todo change the secret before deployment in production mode
    secret: "blahsomething",
    saveUninitialized:false,
    resave:false,
    cookie:{
        maxAge:(1000*60*100)
    }
}));

// set up the view engine
app.set('view engine', 'ejs');
app.set('views', './views');

 



app.listen(port, function(err){
    if (err){
        console.log(`Error in running the server: ${err}`);
    }

    console.log(`Server is running on port: ${port}`);
});