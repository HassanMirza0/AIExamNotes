import express from "express";
import { googleAuth, logout } from "../Controllers/auth.controller.js"
import isAuth from "../Middleware/isAuth.middleware.js";

const authRouter = express.Router();
authRouter.post("/google", googleAuth);
authRouter.get("/logout", isAuth, logout);
authRouter.get("/protected", isAuth, (req, res) => {
    res.json({ success: true, message: "This is a protected route", userId: req.userId });
});
export default authRouter;