const express = require('express');
const app = express();
const port = 8000;
const expressLayouts = require('express-ejs-layouts');


// set up the engine 
app.set('view engine', 'ejs');
app.set('views', './views');

// use express router
app.use(expressLayouts);
app.use('/', require('./routes'));








app.listen(port, function(err){
    if(err){
        console.log(`Error in running the server: ${err}`);
    }
    console.log(`Server is running on : ${port}`);
})