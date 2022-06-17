import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();

//Connect to MongoDB
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to mongoDB");
  } catch (error) {
    throw error;
  }
};

export default connect;
