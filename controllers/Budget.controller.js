const { 
    GET_ALL_BUDGET,
    ADD_NEW_BUDGET,
    GET_PARTICULAR_BUDGET,
} = require('../Router/BudgetRouter');

const BudgetRouter = require('express').Router();

BudgetRouter.post('/create', ADD_NEW_BUDGET);
BudgetRouter.post('/', GET_ALL_BUDGET);
BudgetRouter.post('/selectedlist', GET_PARTICULAR_BUDGET);

module.exports = BudgetRouter;