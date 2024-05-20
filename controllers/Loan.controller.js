const { 
    ADD_NEW_LOAN,
    GET_ALL_LOAN,
    GET_PARTICULAR_LOAN,
} = require('../Router/LoanRouter');

const LoanRouter = require('express').Router();

LoanRouter.post('/create', ADD_NEW_LOAN);
LoanRouter.post('/', GET_ALL_LOAN);
LoanRouter.post('/selectedlist', GET_PARTICULAR_LOAN);

module.exports = LoanRouter;