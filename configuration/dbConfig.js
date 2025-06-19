const mongoose = require("mongoose")
const dotenv = require("dotenv");
dotenv.config();

async function  dbConnection() {
    try {
        const conn= await mongoose.connect(process.env.DB_URI)
        console.log(`MongoDB Connected : Successfully`);
        
    } catch (error) {
        console.log("DB Error", error);
        process.exit(1)
    }
}
module.exports = dbConnection