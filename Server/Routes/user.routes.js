import express from "express";  
import router from "express";   
import isAuth from "../Middleware/isAuth.middleware.js";
import  getCurrentUser  from "../Controllers/user.controller.js";

const userRouter = express.Router();

userRouter.get("/currentuser",isAuth ,getCurrentUser);


export default userRouter;