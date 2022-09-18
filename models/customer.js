


const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const Customer = new mongoose.Schema(
    {
        customerId: { type: String, required: true, unique: true},
        email: { type: String, required: true, unique: true}
    }
);

Customer.plugin(passportLocalMongoose);

module.exports = mongoose.model('Customer', Customer);
