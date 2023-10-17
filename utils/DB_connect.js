const mongoose = require("mongoose");
require("dotenv").config();

class DBConnect {
  constructor() {
    const { MONGODB_URI } = process.env;
    this.dbUri = MONGODB_URI;
  }

  async connect() {
    try {
      await mongoose.connect(this.dbUri);
      console.log("Connected to the database");
    } catch (error) {
      console.error("Error connecting to the database:", error);
    }
  }

  disconnect() {
    mongoose.connection.close(() => {
      console.log("Disconnected from the database");
    });
  }
}

module.exports = new DBConnect();
