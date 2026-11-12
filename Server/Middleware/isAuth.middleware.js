import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const isAuth = async (req, res, next) => {
    try {

        const token = req.cookies.token;
        if (!token) {
            res.status(400).json({ success: false, message: "Token is not found" })
        }
        const verify = jwt.verify(token, process.env.JWT_SECRET);
        if (!verify) {
            res.status(400).json({ success: false, message: "User doesnt have valid token" })
        }
        console.log("Verified Token:", verify); // Log the verified token
        req.userId = verify.userId;
        next();
    } catch (error) {
        console.log("Error in isAuth middleware:", error.message); // Log any errors that occur
    }




}
export default isAuth;