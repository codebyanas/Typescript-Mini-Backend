import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const mongodbURI = process.env.MONGODB_URI;
 
export const connectDB = async (): Promise<void> => {
  try {
    if (!mongodbURI) {
        throw new Error('MONGODB_URI environment variable is not defined')
    }

    await mongoose.connect(`${mongodbURI}/ts-mini-backend`);
    console.log("Connected to Database Successfully!");
  } catch (error) {
    console.log("Database connection error", error);
  }
};
