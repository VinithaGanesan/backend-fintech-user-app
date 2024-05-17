const mongoose = require('mongoose');

const ExpenseSchema = mongoose.Schema({
    userId: {
        type: mongoose.Types.ObjectId,
        ref: "users",
    },
    transactiontype: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    amount: {
        type: Number,
        required: true,
        default: 0,
    },
});

module.exports = mongoose.model('expenses', ExpenseSchema);