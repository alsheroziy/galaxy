const mongoose = require('mongoose');

const connectDB = async () => {
    const connecting = await mongoose.connect(process.env.MONGO_URI)
    console.log(`mongodb connected to ${connecting.host}`)
}

module.exports = connectDB;