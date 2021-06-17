const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const user_schema = new Schema({
    user_id: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    user_name: String,
    user_mobile: Number,
    user_email: String,
    user_addresses:[{
        name: String,
        mobile: Number,
        address: {
            house_no: Number,
            street: String,
            pincode: Number,
            city: String,
            state: String
        }

    }],
    orders:[{
        order_id: String,
        order_detail: String,
    }]
});

const users = mongoose.model('users', user_schema);
module.exports = users;