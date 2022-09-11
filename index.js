/* 
 * ====================================
 * Title: index.js
 * Author:  John Vanhessche
 * DAte: 29 August 2022
 * Description:  index.js module for pets-r-us app 
 * ====================================
 */

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Needed to set path, because the path.join in app.set was throwing a reference error.
const path = require('path');

//per handout for week 4.  
app.engine('.html', require('ejs').__express);
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'html');
app.use(express.static(path.join(__dirname, '/public')));

app.use(express.static("views"));

//Creating routes for home and grooming pages
app.get('/', (req, res) => {  
    res.render("index", {
        title: "Home page",
        message: "home page route"
    })
});

app.get('/', (req, res) => {
    res.render("grooming", {
        title: 'grooming',
        message: 'grooming page route'
    })
});

app.get('/', (req, res) => {
    res.render("training", {
        title: 'training',
        message: 'training page route'
    })
});

app.get('/', (req, res) => {
    res.render("boarding", {
        title: 'boarding',
        message: 'boarding page route'
    })
});


//starting server on port 3000
app.listen(PORT, () => {
    console.log('Application started and listening on port ' + PORT);
})

