import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRouter from "./Routes/auth.routes.js";
import connectDb from "./Utils/connectDb.js";
import userRouter from "./Routes/user.routes.js";
import notesRouter from "./Routes/generate.routes.js"

dotenv.config();
const app = express();
app.use(cors(
    {
        origin: "http://localhost:5173",
        credentials: true,
        methods: ["GET", "POST", "PUT", "DELETE"],
    }

))
app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);
app.use("/api/notes", notesRouter);

// const PORT = process.env.PORT_NO || 8000;
//  const PORT =  8000;
const PORT = Number(process.env.PORT_NO) || 8000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    connectDb();
})