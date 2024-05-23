const Authmodel = require("../models/Authmodel");
const Expensemodel = require("../models/Expensemodel");
const moment = require('moment');



function ADD_NEW_EXPENSE(req, res, next) {
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

  const newExpense = new Expensemodel({userId,
    transactiontype,
    category,
    description,
    date: formattedDate,
    amount,  });


    // store the expense data generated from product model instance

    newExpense.save()
        .then((response) => {
            if (response._id) {
                return res.status(200).json({
                    success: true,
                    message: "Expense added successfully",
                    data: response,
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

function GET_ALL_EXPENSE(req, res, next) {
    const { userId } = req.body;
    Expensemodel.find({ userId })
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


function GET_PARTICULAR_EXPENSE(req, res, next) {
    const { userId, startDate, endDate } = req.body;

    const formattedstartDate = moment(startDate, "YYYY-MM-DD").format("DD-MM-YYYY");
    const formattedendDate = moment(endDate, "YYYY-MM-DD").format("DD-MM-YYYY");


    const format = "DD-MM-YYYY HH:mm:ss";


    const start = moment(formattedstartDate, format).toISOString();
    const end = moment(formattedendDate, format).toISOString();


    const query = {
        userId,
        date: {
            $gte: start,
            $lte: end
        }
    }

    Expensemodel.find(query)
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
    ADD_NEW_EXPENSE,
    GET_ALL_EXPENSE,
    GET_PARTICULAR_EXPENSE
}