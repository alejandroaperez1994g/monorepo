import express, {Express} from 'express';
import cors from "cors";
import dotenv from "dotenv";

const app: Express = express();

dotenv.config();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello World")
})

app.get("/api", (req, res) => {
    res.send({message: "Hello World"})
})

const PORT = process.env.PORT || 8080;

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})
