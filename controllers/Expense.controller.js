const { 
    GET_ALL_EXPENSE,
    ADD_NEW_EXPENSE,
    // GET_PARTICULAR_EXPENSE,
} = require('../Router/ExpenseRouter');

const ExpenseRouter = require('express').Router();

ExpenseRouter.post('/create', ADD_NEW_EXPENSE);
ExpenseRouter.get('/', GET_ALL_EXPENSE);
// ExpenseRouter.get('/selectedlist', GET_PARTICULAR_EXPENSE)

module.exports = ExpenseRouter;