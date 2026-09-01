import express from "express";
import dotenv from "dotenv";
import connectDb from "./config/db.js";
dotenv.config();
import userRouter from "./routes/user.route.js";
import Redis from "ioredis";
const app = express();


export const redis = new Redis(process.env.REDIS_URL);
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
    res.send(`Hello from Redis server ${process.env.SERVER_NAME}`);
});

app.use("/user", userRouter);
connectDb()
app.listen(process.env.PORT, () => {
    console.log("Server is running on port", process.env.PORT);
});

// 13ms without redis cache