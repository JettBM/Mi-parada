import express, { Request, Response } from "express";

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 5000;

app.get('/', (req: Request, res: Response) => {
    res.send("typescript API mi-parada");
})

app.listen(PORT, () => {
    console.log(`server running on http://localhost:${PORT}`);
})
