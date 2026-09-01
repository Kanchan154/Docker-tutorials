import express from "express";
import dotenv from "dotenv";
import connectDb from "./config/db.js";
dotenv.config();
import userRouter from "./routes/user.route.js";
const app = express();


app.use(express.json());

const PORT = process.env.PORT || 8001;

app.get("/", (req, res) => {
    res.send(`Hello from Payment server ${process.env.SERVER_NAME}`);
});

app.use("/user", userRouter);
connectDb()
app.listen(process.env.PORT, () => {
    console.log("Server is running on port", process.env.PORT);
});

