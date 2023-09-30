const express = require('express');
const path = require('path');
const port = 8000;
const app = express();

// __dirname is in a current module
app.set('view engine','ejs');
app.set('views', path.join(__dirname,'views'));

// here we are creating a contact list object
var contactList = [
    {
        name:'yashwant',
        phone: '7083233905'
    },
    {
        name:'gorakh',
        phone:'7057366725'
    },
    {
        name: 'dada',
        phone: '7620204422'
    }
]

app.get('/', function(req, res){
    return res.render('home',{
        title: "contact list",
        contact_List: contactList
    });

});
app.get('/practice', function(req, res){
    return res.render('practice',{
        title: "let us play with ejs"
    });
});