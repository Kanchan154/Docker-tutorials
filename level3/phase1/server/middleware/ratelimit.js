import { redis } from "../index.js";

export const rateLimitter = async (req, res, next) => {
    const ip = req.ip;
    const key = `rate_limit:${ip}`;
    const requests =await redis.incr(key);
    // reset requests after a minute
    if(requests==1) {
        await redis.expire(key,60);
    }
    
    // block requests after a number
    if(requests>5){
        return res.status(429).json({
            message:"Too many requests",
        })
    }
    next();

}