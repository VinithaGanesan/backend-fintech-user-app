const mongoose = require('mongoose');

//create schema

const AuthSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true,
      },
      lastName: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
      },
      password: {
        type: String,
        required: true,
      },
      roles: {
        type: Array,
        default: ["customer"],
      },
});

module.exports = mongoose.model('user',AuthSchema);