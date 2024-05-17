const Authmodel = require("../models/Authmodel");
const Expensemodel = require("../models/Expensemodel");
const moment = require('moment');



function ADD_NEW_EXPENSE(req, res, next) {


    const Expense = new Expensemodel(req.body);
    // store the expense data generated from product model instance

    Expense.save()
        .then((response) => {
            if (response._id) {
                return res.status(200).json({
                    success: true,
                    message: "Expense added successfully"
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

function GET_ALL_EXPENSE(req, res, next) {
    Expensemodel.find()
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
                error: error,
            })

        })
}


// async function GET_PARTICULAR_EXPENSE(req, res, next) {
//     const { userId, startDate, endDate } = req.body;

//     // const query = [{$group: { userId:userId }}]

    
//     // const query = {
//     //      userId: userId,
//     //     //  date: {
//     //     //     $gte: moment(startDate).toDate(),
//     //     //     $lte: moment(endDate).toDate(),
//     //     //  }
//     // }

    
//     // if (startDate && endDate) {
//     //     query.date = {
//     //         $gte: moment(startDate).toDate(),
//     //         $lte: moment(endDate).toDate(),
//     //         // $gte: startDate,
//     //         // $lte: endDate,

//     //     }
//     // }

//     // const users = await Expensemodel.find(query);
//     // console.log(users);
//     console.log(moment(startDate).format());
//     console.log(moment(endDate).format());




//     Expensemodel.find({userId: userId, date: startDate})
//         .then((response) => {
//             if (response) {
//                 return res.status(200).json({
//                     success: true,
//                     message: "expenses fetched successfully",
//                     data: response,
//                 })
//             } else {
//                 return res.status(200).json({
//                     success: true,
//                     message: "No transactions found",
//                     data: [],
//                 })
//             }
//         })
//         .catch((error) => {
//             return res.status(400).json({
//                 success: false,
//                 error: error.message,
//             })

//         })
// }





module.exports = {
    ADD_NEW_EXPENSE,
    GET_ALL_EXPENSE,
    // GET_PARTICULAR_EXPENSE
}