const { 
    GET_ALL_INVESTMENT,
    ADD_NEW_INVESTMENT,
    GET_PARTICULAR_INVESTMENT
} = require('../Router/InvestmentRouter');

const InvestmentRouter = require('express').Router();

InvestmentRouter.post('/create', ADD_NEW_INVESTMENT);
InvestmentRouter.post('/', GET_ALL_INVESTMENT);
InvestmentRouter.post('/selectedlist', GET_PARTICULAR_INVESTMENT);

module.exports = InvestmentRouter;