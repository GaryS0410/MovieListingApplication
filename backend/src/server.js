import dotenv from "dotenv";
import express from "express";
import cors from "cors";

import { connectDB } from "./config/db.js";

import movieRoutes from "./routes/movieRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";

// Defining dotenv config 
dotenv.config();
const PORT = process.env.PORT;

// Connecting to the database 
connectDB();

const app = express();

// CORS configuration - sets rules which allow both React.js and Express.js to communicate effectively
const corsOptions = {
    origin: ["http://localhost:5173"],
};
app.use(cors(corsOptions));
app.use(express.json())

app.use("/api/movies", movieRoutes);
app.use('/auth', authRoutes);
app.use('/user', userRoutes);


// Running the server on a designated port, in this case port 8080
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
});