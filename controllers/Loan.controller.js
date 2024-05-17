const { 
    ADD_NEW_LOAN,
    GET_ALL_LOAN,
} = require('../Router/LoanRouter');

const LoanRouter = require('express').Router();

LoanRouter.post('/create', ADD_NEW_LOAN);
LoanRouter.get('/', GET_ALL_LOAN);

module.exports = LoanRouter;