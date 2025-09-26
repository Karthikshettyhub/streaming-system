import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
import { registerUser } from "./controllers/user.controller.js"

const app = express()

app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}))

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"))
app.use(cookieParser())


//routes

import userRouter from './routes/user.routes.js'
import multer from "multer";
const upload = multer({ dest: "uploads/" });

app.post("/register", upload.fields([
  { name: "avatar", maxCount: 1 },
  { name: "coverImage", maxCount: 1 }
]), registerUser);

app.use("/api/v1/users", userRouter)
//


export { app }