const Incomemodel = require("../models/Incomemodel");
const moment = require('moment');


function ADD_NEW_INCOME(req, res, next) {

    const {
        userId,
        transactiontype,
        category,
        description,
        date,
        amount
    } = req.body;
    const format = "DD-MM-YYYY HH:mm:ss";

    const formattedDate = moment(date, format).toISOString();

  const newIncome = new Incomemodel({userId,
    transactiontype,
    category,
    description,
    date: formattedDate,
    amount,  });
    // store the income data generated from product model instance

    newIncome.save()
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
    const { userId } = req.body;

    Incomemodel.find({userId})
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

function GET_PARTICULAR_INCOME(req, res, next) {
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

    Incomemodel.find(query)
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
    ADD_NEW_INCOME,
    GET_ALL_INCOME,
    GET_PARTICULAR_INCOME
}