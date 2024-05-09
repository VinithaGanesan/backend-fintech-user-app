const mongoose = require('mongoose');

function connectToDatabase() {
    const dbUrl = `${process.env.MONGODB_URI_LOCAL}${process.env.MONGODB_DATABASE_NAME}`
    mongoose.connect(dbUrl)
        .then((response) => console.log("Database connected successfully"))
        .catch((err) => console.log(err));

}

module.exports = {
    connectToDatabase
}