const express = require('express');
const app = express();
const port = 8000;
const expressLayouts = require('express-ejs-layouts');
// const db = require('./config/mongoose');

// set up the engine
app.use(express.static('./assests')); 
app.set('view engine', 'ejs');
app.set('views', './views');

// use express router
app.use(expressLayouts);

// extract style and scripts from sub pages into the layout
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);
app.use('/', require('./routes'));



app.listen(port, function(err){
    if(err){
        console.log(`Error in running the server: ${err}`);
    }
    console.log(`Server is running on : ${port}`);
});