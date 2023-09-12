const mongoose = require("mongoose");
const connectToDatabase = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/myapp", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to database");
  } catch (error) {
    console.error("Failed to connect to database", error);
  }
};

module.exports = { connectToDatabase };
