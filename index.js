import express from "express";
import mongoose from 'mongoose';
import { bookingRouter } from "./routes/all-routes.js";
import 'dotenv/config';
import cors from "cors";

// connect to database
await mongoose.connect(process.env.MONGO_URI)

// creat an express app
const app = express();

// assign port variable
const PORT = 7070

// use routes
app.use(cors());
app.use(express.json());
app.use(bookingRouter);

// listening for incoming requests
app.listen(PORT,() => {
    console.log(`App is listening on port ${PORT}`)
});