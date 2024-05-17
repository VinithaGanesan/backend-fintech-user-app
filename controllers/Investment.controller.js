const { 
    GET_ALL_INVESTMENT,
    ADD_NEW_INVESTMENT,
} = require('../Router/InvestmentRouter');

const InvestmentRouter = require('express').Router();

InvestmentRouter.post('/create', ADD_NEW_INVESTMENT);
InvestmentRouter.get('/', GET_ALL_INVESTMENT);

module.exports = InvestmentRouter;