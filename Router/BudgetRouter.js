const Budgetmodel = require("../models/Budgetmodel");

function ADD_NEW_BUDGET(req, res, next) {

    const Budget = new Budgetmodel(req.body);
    // store the budget data generated from product model instance

    Budget.save()
        .then((response) => {
            if (response._id) {
                return res.status(200).json({
                    success: true,
                    message: "Budget added successfully"
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
                error: error.message,
            })

        })
}

function GET_ALL_BUDGET(req, res, next) {
    Budgetmodel.find()
        .then((response) => {
            if (response.length > 0) {
                return res.status(200).json({
                    success: true,
                    message: "Budgets fetched successfully",
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
    ADD_NEW_BUDGET,
    GET_ALL_BUDGET
}