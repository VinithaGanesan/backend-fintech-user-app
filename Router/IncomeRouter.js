const Incomemodel = require("../models/Incomemodel");

function ADD_NEW_INCOME(req, res, next) {

    const Income = new Incomemodel(req.body);
    // store the income data generated from product model instance

    Income.save()
        .then((response) => {
            if (response._id) {
                return res.status(200).json({
                    success: true,
                    message: "Income added successfully"
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

function GET_ALL_INCOME(req, res, next) {
    Incomemodel.find()
        .then((response) => {
            if (response.length > 0) {
                return res.status(200).json({
                    success: true,
                    message: "income transactions fetched successfully",
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
    ADD_NEW_INCOME,
    GET_ALL_INCOME
}