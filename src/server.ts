import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import router from "./app/mainRoutes";
import globalError from "./global/globalError";
import { url } from "node:inspector";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

// app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => res.send({ message: "Welcome" }));

app.use("/api/v1", router);

app.use(globalError);
app.listen(process.env.PORT, async () => {
  console.log(`Server running on port ${process.env.PORT}`);
  try {
    await mongoose.connect(process.env.DB_URI || "");
    console.log("DB connected");
  } catch (error) {
    console.error(error);
  }
});
