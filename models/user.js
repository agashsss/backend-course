var mongoose = require('mongoose');

var schema = new mongoose.Schema({
    email: {
        type: String,
        unigue: true,
        required: true
    },
    firstName: {
        type: String,
        default: ""
    },
    lastName: {
        type: String,
        default: ""
    },
    phone: String
});

var user = new mongoose.model('User', schema);

module.exports = user;