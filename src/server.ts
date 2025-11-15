import express, { Request, Response } from "express";
import dotenv from "dotenv";
import { db } from "./firebase";
import router from "./routes/user.routes";

const app = express();

app.use(express.json());

const PORT = 3000;

app.get('/', (req, res) => {
    console.log("server running")
})

app.listen(PORT, () => {
    console.log(`server running on ${PORT}`);
})
