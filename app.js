const express = require('express');


const APP_SERVER = express();

// inject all controllers inside the app server

APP_SERVER.use('/auth', require('./controllers/Authentication.controller'));
// APP_SERVER.use('/transaction', require('./controllers/Transactions.controller'));
APP_SERVER.use('/income', require('./controllers/Income.controller'));
APP_SERVER.use('/expenses', require('./controllers/Expense.controller'));
APP_SERVER.use('/investment', require('./controllers/Investment.controller'));
APP_SERVER.use('/loan', require('./controllers/Loan.controller'));
APP_SERVER.use('/budget', require('./controllers/Budget.controller'));



module.exports = APP_SERVER;

