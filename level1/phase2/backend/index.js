import express from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    return res.status(200).json({
        message: "Hello from Docker"
    })
})

app.listen(PORT, () => {
    console.log(`Server is listening to port ${PORT}`);
})