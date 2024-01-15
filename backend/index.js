import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"

import authRoute from './routes/auth.js'
import usersRoute from './routes/users.js'
import hotelsRoute from './routes/hotels.js'
import roomsRoute from './routes/rooms.js'

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

// mongoose.connection.on("disconnected", () => {
//     console.log("Disconnected mongoDB Atlas");
// })

// mongoose.connection.on("connected", () => {
//     console.log("Connected mongoDB Atlas");
// })

// middlewares

app.use(express.json())

app.use("/backend/auth", authRoute)
app.use("/backend/users", usersRoute)
app.use("/backend/hotels", hotelsRoute)
app.use("/backend/rooms", roomsRoute)

app.listen(8000, ()=> {
    connect() 
    console.log("Connected to Backend")
})