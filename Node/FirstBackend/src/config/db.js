import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URL);
    console.log(`mongoose connected : ${conn.connection.host}:${conn.connection.port}`);
    console.log("Database connected successfully :",conn.connection.name);
  } catch (error) {

    

    console.log(error);
    process.exit(1);
    
  }
};
export default connectDB;