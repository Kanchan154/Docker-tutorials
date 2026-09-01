import dotenv from "dotenv";
import express from "express";
import proxy from "express-http-proxy";

dotenv.config();

const PORT = process.env.PORT || 8000;
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send(`Hello from gateway server: ${process.env.SERVER_NAME}`);
});

app.use("/auth", proxy("http://auth_service:8001"));
app.use("/order", proxy("http://order_service:8002"));
app.use("/payment", proxy("http://payment_service:8003"));
app.use("/product", proxy("http://product_service:8004"));

app.listen(PORT, () => {
    console.log(`Gateway is running on port ${PORT}`);
});