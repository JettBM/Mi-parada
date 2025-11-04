import express, { Request, Response } from "express";
import dotenv from "dotenv";
import { db } from "./firebase";

dotenv.config();

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 5000;

async function testFirebaseConnection() {
    try {
        await db.ref('.info/connected')
        console.log("Firebase connection successful")
    } catch (error) {
        console.error("Error connecting", error)
        process.exit(1)
    }
}

app.get('/', (req: Request, res: Response) => {
    res.send("typescript API mi-parada");
})

app.listen(PORT, async () => {
    console.log(`server running on http://localhost:${PORT}`);
    await testFirebaseConnection();
})
