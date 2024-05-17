const { 
    GET_ALL_INCOME,
    ADD_NEW_INCOME,
} = require('../Router/IncomeRouter');

const IncomeRouter = require('express').Router();

IncomeRouter.post('/create', ADD_NEW_INCOME);
IncomeRouter.get('/', GET_ALL_INCOME);

module.exports = IncomeRouter;