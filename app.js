const express = require('express');


const APP_SERVER = express();

// inject all controllers inside the app server

APP_SERVER.use('/auth', require('./controllers/Authentication.controller'));

module.exports = APP_SERVER;

