import express from "express";
import Usermodel from "../models/user.model.js";
const router = express.Router();

router.post("/register", async (req, res) => {
    const { name, email, password } = req.body;
    const user = await Usermodel.create({ name, email, password });

    res.status(201).json(user);
});

router.get("/all", async (req, res) => {
    try {
        const users = await Usermodel.find();
        res.status(200).json(users);

    } catch (error) {

    }
});
export default router;

// router.get("/all-redis", rateLimitter, async (req, res) => {
//     try {
//         // fetch data from redis first
//         const cache = await redis.get("users:all");
//         if (cache) {
//             return res.status(200).json(JSON.parse(cache));
//         }
//         // if not in redis, fetch from db
//         const users = await Usermodel.find();
//         // store in redis
//         await redis.set("users:all", JSON.stringify(users));
//         res.status(200).json(users);
//     } catch (error) {

//     }
// });

// router.post("/send-otp", async (req, res) => {
//     try {
//         const { email } = req.body;
//         const otp = Math.floor(100000 + Math.random() * 900000);
//         // save the otp to the cache 
//         await redis.set(`otp:${email}`, otp, "EX", 60 * 5);
//         // send otp to user
//         res.status(200).json({ message: "OTP sent successfully", otp });
//     } catch (error) {

//     }
// })

// router.post("/verify-otp", async (req, res) => {
//     try {
//         const { otp, email } = req.body;
//         // check opt from the redis
//         const otpGenerated = await redis.get(`otp:${email}`);
//         if (!otpGenerated) {
//             return res.status(400).json({
//                 message: "Otp not found or has been expired"
//             })
//         };
//         if (otp != otpGenerated) {
//             return res.status(400).json({ message: "Invalid otp" })
//         }
//         // remove otp data from redis
//         await redis.del(`otp:${email}`);
//         res.status(200).json({
//             message: "Otp verified successfully"
//         })
//     } catch (error) {

//     }

// })