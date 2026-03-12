import mongoose from "mongoose";
import { connectRedis } from "../utils/redis.js";

export const connectToMongoDB = async () => {
  try {

    await mongoose.connect(process.env.MONGO_DB_URI);

    console.log("MongoDB Connected");

    await connectRedis();

  } catch (error) {

    console.log("Error:", error.message);

  }
};

export default connectToMongoDB;