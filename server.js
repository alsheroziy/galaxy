const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

// **** initialize env variables ****
dotenv.config()

// **** connection to data base ****
connectDB()

// **** App instance ****
const app = express();

// **** body parser ****
app.use(express.json());
app.use(express.urlencoded({ extended: false }));



const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`server started ${PORT}`);
});