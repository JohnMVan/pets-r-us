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
const mongoose = require('mongoose');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const session = require('express-session');
const Customer = require('./models.customer.js');

// Needed to set path, because the path.join in app.set was throwing a reference error.
const path = require('path');

const conn = `mongodb+srv://web340_admin:PW123abc!@bellevueuniversity.ouotidt.mongodb.net/?retryWrites=true&w=majority`;

//per handout for week 4.  
app.engine('.html', require('ejs').__express);

app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'html');

app.use(express.static(path.join(__dirname, '/public')));

app.use(session({
    secret: 's3cret',
    resave: true,
    saveUnitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(Customer.authenticate()));
passport.serializeUser(Customer.serializeUser());
passport.deserializeUser(Customer.deserializeUser());

Customer.register(new Customer({customerId: customerID, email: email}),
    password, function(err, user) {
        if(err) {
            console.log(err);
            return res.redirect('/register')
        }

        passport.authenticate('local') (
            req, res, function() {
                res.redirect('/register')
            });
        }),

//   app.use(express.static("views"));     I don't need this code.  By removing, the website started to generate correctly.

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

http.get('partials/_registration', function(req, res) 
{
    res.render('_registration')
});

http.post('partials/_registration', function(req, res, next) {
    let customerID = req.body.customerID;
    let email = req.body.email;
});

mongoose.connect(conn).then(() => {
    console.log('Connection to the database was successful')
}).catch(err => {
    console.log('MongoDB Error: ' + err.message)
})


//starting server on port 3000
app.listen(PORT, () => {
    console.log('Application started and listening on port ' + PORT);
})

