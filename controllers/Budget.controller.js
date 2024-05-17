const { 
    GET_ALL_BUDGET,
    ADD_NEW_BUDGET,
} = require('../Router/BudgetRouter');

const BudgetRouter = require('express').Router();

BudgetRouter.post('/create', ADD_NEW_BUDGET);
BudgetRouter.get('/', GET_ALL_BUDGET);

module.exports = BudgetRouter;