const Budgetmodel = require("../models/Budgetmodel");
const moment = require('moment');


function ADD_NEW_BUDGET(req, res, next) {

    const {
        userId,
        type,
        date,
        amount
    } = req.body;
    const format = "DD-MM-YYYY HH:mm:ss";

    const formattedDate = moment(date, format).toISOString();

  const newBudget = new Budgetmodel({userId,
    type,
    date: formattedDate,
    amount,  });
    // store the budget data generated from product model instance

    newBudget.save()
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
    const { userId } = req.body;
    Budgetmodel.find({ userId })
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

function GET_PARTICULAR_BUDGET(req, res, next) {
    const { userId, startDate, endDate } = req.body;

    const format = "DD-MM-YYYY HH:mm:ss";

    const start = moment(startDate, format).toISOString();
    const end = moment(endDate, format).toISOString();

    const query = {
        userId,
        date: {
            $gte: start,
            $lte: end
        }
    }

    Budgetmodel.find(query)
        .then((response) => {
            if (response.length > 0) {
                return res.status(200).json({
                    success: true,
                    message: "expense transactions fetched successfully",
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
                error: error.message,
            })

        })
}





module.exports = {
    ADD_NEW_BUDGET,
    GET_ALL_BUDGET,
    GET_PARTICULAR_BUDGET
}