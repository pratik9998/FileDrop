import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const DBConnection = async () => {
    const MONGODB_URI = process.env.MONGODB_URL;
    try{
        await mongoose.connect(MONGODB_URI);
        console.log("DB connection established");
    }catch(error){
        console.error("Error connecting to mongodb" + error);
    }
};

export default DBConnection;
