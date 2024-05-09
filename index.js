const express = require('express');
const { connectToDatabase } = require('./database/dbconfig');
const cors = require('cors');
const bodyparser = require('body-parser');

const HTTP_SERVER = express();

//configuring dotenv
require('dotenv').config();

//connecting with database
connectToDatabase();

//ENABLING CORS
HTTP_SERVER.use(cors());

//CONFIGURE APPLICATION TO READ REQUEST BODY AS JSON
HTTP_SERVER.use(bodyparser.json());

//INJECT APPLICATION SERVER IN HTTP_SERVER
HTTP_SERVER.use('/api', require('./app'));

const PORT = process.env.NODE_HOST_NAME;

HTTP_SERVER.listen(PORT, "0.0.0.0", () => {
    console.log(`server started successfully ${PORT}`)
})