const mongoose = require("mongoose");

const connectDB = async () => {
    console.log("Attempting MongoDB connection...");

    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);

        console.log(
            `MongoDB Atlas connected: ${conn.connection.host}`
        );
    } catch (error) {
        console.error("MongoDB connection failed:");
        console.error(error.message);
        process.exit(1);
    }
};

module.exports = connectDB;