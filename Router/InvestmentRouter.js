const Investmentmodel = require("../models/Investmentmodel");



function ADD_NEW_INVESTMENT(req, res, next) {

    const Investment = new Investmentmodel(req.body);
    // store the income data generated from product model instance

    Investment.save()
        .then((response) => {
            if (response._id) {
                return res.status(200).json({
                    success: true,
                    message: "Investment added successfully"
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

function GET_ALL_INVESTMENT(req, res, next) {
    Investmentmodel.find()
        .then((response) => {
            if (response.length > 0) {
                return res.status(200).json({
                    success: true,
                    message: "Investment transactions fetched successfully",
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
    ADD_NEW_INVESTMENT,
    GET_ALL_INVESTMENT
}