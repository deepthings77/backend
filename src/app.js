import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";


const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))
//configure for json data
app.use(express.json({
    limit: "16kb"
}))
//configure for url data
app.use(express.urlencoded({ extended: true, limit: "16kb" }))
// for some public things 5:47:07
app.use(express.static("public"))
app.use(cookieParser())
export { app }