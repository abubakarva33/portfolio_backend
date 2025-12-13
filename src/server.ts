import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import router from "./app/mainRoutes";
import globalError from "./global/globalError";

dotenv.config();

const app =express();
app.use(express.json())
app.use(cors())

app.get("/", (req,res)=> res.send({message: "BOkor vai pro"}))

app.use("/api/v1", router)

app.use(globalError);
app.listen(process.env.PORT, async()=>{
    console.log(`Server running on port ${process.env.PORT}`)
    try {
        await mongoose.connect(process.env.DB_URI || "")
        console.log("DB connected")
    } catch (error) {
        console.error(error)
    }
})
