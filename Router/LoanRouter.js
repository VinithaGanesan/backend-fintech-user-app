const Loanmodel = require("../models/Loanmodel");



function ADD_NEW_LOAN(req, res, next) {

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

  const newLoan = new Loanmodel({userId,
    transactiontype,
    category,
    description,
    date: formattedDate,
    amount,  });
    // store the loan data generated from product model instance

    newLoan.save()
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
    const { userId } = req.body;
    Loanmodel.find({ userId })
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

function GET_PARTICULAR_LOAN(req, res, next) {
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

    Loanmodel.find(query)
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
    ADD_NEW_LOAN,
    GET_ALL_LOAN,
    GET_PARTICULAR_LOAN
}