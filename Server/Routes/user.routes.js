import router from "express";

const userRouter = router.Router();

userRouter.get("/logout", logout);