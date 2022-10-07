/* 
 * ====================================
 * Title: index.js
 * Author:  John Vanhessche
 * DAte: 29 August 2022
 * Description:  index.js module for pets-r-us app 
 * ====================================
 */

const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

const Customer = require('./models/customer');
const Appointment = require('./models/appointment');

const app = express();
app.engine('.html', require('ejs').__express);
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'html');

app.use(express.static(path.join(__dirname, '/public')));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

const PORT = process.env.PORT || 3000;
const conn = `mongodb+srv://web340_admin:PW123abc!@bellevueuniversity.ouotidt.mongodb.net/web340DB?retryWrites=true&w=majority`;

mongoose.connect(conn).then(() => {
    console.log('Connection to the database was successful')
}).catch(err => {
    console.log('MongoDB Error: ' + err.message)
});


app.get('/', (req, res) => {  
    res.render("index", {
        title: "Home page",
        message: "home page route"
    })
});

app.get('/grooming', (req, res) => {
    res.render("grooming", {
        title: 'grooming',
        message: 'grooming page route'
    })
});

app.get('/training', (req, res) => {
    res.render("training", {
        title: 'training',
        message: 'training page route'
    })
});

app.get('/boarding', (req, res) => {
    res.render("boarding", {
        title: 'boarding',
        message: 'boarding page route'
    })
});

app.get('/registration', (req, res) => {
    res.render('registration', {
        title: `Pets-R-Us: Registration`
    })
}); 

app.post('/registration', (req, res, next) => {
    const newCustomer = new Customer({
        customerId: req.body.customerId,
        email: req.body.email
    })  
    
    Customer.create(newCustomer, function(err, cus) {
        if (err) {
            console.log(err);
            next(err);
        } else {
            res.render('index', {
                pageHeader: 'Welcome to Pets-R-Us',
                title: 'Pets-R-Us: Home'
            })
        }
    })
});

app.get('/customer-list', (req, res) => {
    res.render('customer-list')
});

app.get('/appointment', (req, res) => {
    res.render('appointment', {
        title: `Pets-R-Us: Appointments`
    })
});

app.get('api/appointment', async(req, res) => {}
    Customer.find('customerId': req.params.customerId), 
    function(err, orders) {
        if(err) {
            console.log(err);
            next(err);
        } else {
            res.json(appointment);
        }
    })

//starting server on port 3000
app.listen(PORT, () => {
    console.log('Application started and listening on port ' + PORT);
})

