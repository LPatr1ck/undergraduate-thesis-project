import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./Routes/auth.js";
import roomsRoute from "./Routes/hotelrooms.js";
import hotelsRoute from "./Routes/hotels.js";
import usersRoute from "./Routes/users.js";
import cookieParser from "cookie-parser";

const app = express()
dotenv.config()

const connect = async () => {

    try {
        await mongoose.connect(process.env.MONGO)
        console.log("Connected to MongoDB.")
    } catch (error) {
        throw error
    }
}

mongoose.connection.on("disconnected", () => {
    console.log("MongoDB disconnected!")
})

app.use(cookieParser())
app.use(express.json())

app.use("/Api/auth", authRoute)
app.use("/Api/hotelrooms", roomsRoute)
app.use("/Api/hotels", hotelsRoute)
app.use("/Api/users", usersRoute)

app.use((err, req, res, next) => {
    const errorStatus = err.status || 500
    const errorMessage = err.message || "Something went wrong!"
    return res.status(errorStatus).json({
        succes: false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack
    })
})

app.listen(8800, () => {
    connect()
    console.log("Connected to backend!")
})