import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
    try {
       const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
       console.log(`\n MongoDB Connected !! DB HOST: ${connectionInstance.connection.host}`) //According to this line we can exactly Know the path of data where we can store the data as we various data accounts like production Database and many...
    } catch (error) {
        console.log("MONGODB Connection Error", error)
        process.exit(1)
    }
}

export default connectDB;