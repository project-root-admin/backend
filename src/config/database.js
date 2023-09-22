const mongoose = require("mongoose");
const connectToDatabase = async () => {
  try {
   await mongoose.connect(`${process.env.MONGODB_URI}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })

    const db = mongoose.connection;
    console.log("db.name", db.name)
    

    console.log("Connected to database");
  } catch (error) {
    console.error("Failed to connect to database", error);
  }
};

module.exports = { connectToDatabase };
