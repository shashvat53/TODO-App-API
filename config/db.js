const mongoose = require("mongoose");
require("dotenv").config();

const connectWithDB = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("DB connected Successfully...");
  } catch (error) {
    console.log("error while DB connection");
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectWithDB;
