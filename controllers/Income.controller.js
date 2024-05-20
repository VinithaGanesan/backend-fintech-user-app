const { 
    GET_ALL_INCOME,
    ADD_NEW_INCOME,
    GET_PARTICULAR_INCOME
} = require('../Router/IncomeRouter');

const IncomeRouter = require('express').Router();

IncomeRouter.post('/create', ADD_NEW_INCOME);
IncomeRouter.post('/', GET_ALL_INCOME);
IncomeRouter.post('/selectedlist', GET_PARTICULAR_INCOME);

module.exports = IncomeRouter;