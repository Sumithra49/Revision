const mongoose = require("mongoose");

const dotenv = require("dotenv");
dotenv.config();

const db = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("db");
  } catch (error) {
    console.log(error);
  }
};
module.exports = db;
