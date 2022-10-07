/**
 * Title:  customer.js
 * Author:  John Vanhessche
 * Date:  16 September 2022
 * Desc:  Customer.js file for Pets-R-Us app
 */

const mongoose = require('mongoose');

const Customer = new mongoose.Schema(
    {
        customerId: { type: String, required: true, unique: true},
        email: { type: String, required: true, unique: true}
    }
);

module.exports = mongoose.model('Customer', Customer);
