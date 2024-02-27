const express = require('express');
const dotenv = require('dotenv');

// initialize env variables
dotenv.config()

// App instance
const app = express();

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`server started ${port}`);
});