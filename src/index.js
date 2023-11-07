import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
    path: './env'
})
connectDB()





//require('dotenv').config({path: './env'}) // It is a working dotenv code(By which when my application is load then this package will send all the .env to everywhere is required asap) but there is a issue it can break the consistency of the project//












/*
import { express} from "express";
const app =express()
;(async () => {
    try {
       await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
       app.on("error", (error) => {
        confirm.console.log(("ERR:",error));
        throw error
       })
        app.listen(process.env.PORT,() =>{
            console.log(`App is listening on Port ${process.env.PORT}`)
        })
    } catch (error) {
        console.error("ERROR", error)
        throw err
    }
})()

*/