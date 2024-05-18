const mongoose = require('mongoose');

const BudgetSchema = mongoose.Schema({
    userId: {
        type: mongoose.Types.ObjectId,
        ref: "users",
    },
    type: {
        type: mongoose.Types.ObjectId,
        ref: "expenses",
    },
    date: {
        type: String,
        required: true,
    },
    value: {
        type: Number,
        required: true,
        default: 0,
    },
});

module.exports = mongoose.model('budget', BudgetSchema);