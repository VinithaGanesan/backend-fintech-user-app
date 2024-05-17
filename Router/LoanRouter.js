const Loanmodel = require("../models/Loanmodel");



function ADD_NEW_LOAN(req, res, next) {

    const Loan = new Loanmodel(req.body);
    // store the loan data generated from product model instance

    Loan.save()
        .then((response) => {
            if (response._id) {
                return res.status(200).json({
                    success: true,
                    message: "Loan added successfully"
                })
            } else {
                return res.status(500).json({
                    success: false,
                    message: "something went wrong"
                })
            }
        })
        .catch((error) => {
            return res.status(400).json({
                success: false,
                error: error,
            })

        })
}

function GET_ALL_LOAN(req, res, next) {
    Loanmodel.find()
        .then((response) => {
            if (response.length > 0) {
                return res.status(200).json({
                    success: true,
                    message: "Loan transactions fetched successfully",
                    data: response,
                })
            } else {
                return res.status(200).json({
                    success: true,
                    message: "No transactions found",
                    data: [],
                })
            }
        })
        .catch((error) => {
            return res.status(400).json({
                success: false,
                error: error,
            })

        })
}


module.exports = {
    ADD_NEW_LOAN,
    GET_ALL_LOAN
}