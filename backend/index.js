import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"

const app = express()
dotenv.config()

const connect = async ()=> {
    try{
        await mongoose.connect(process.env.MONGO);
        console.log("Connected to mongoDB")
    } catch (error) {
        throw error
    }
} 

mongoose.connection.on("disconnected", () => {
    console.log("Disconnected mongoDB Atlas");
})

mongoose.connection.on("connected", () => {
    console.log("Connected mongoDB Atlas");
})

app.listen(8000, ()=> {
    connect() 
    console.log("Connected to Backend")
})