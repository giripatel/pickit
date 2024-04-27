import express, { Request, Response } from "express";
import router from "./routes";

const app = express();

app.use(express.json());

app.use("/",router);

app.get("/", (req : Request, res : Response) => {
    res.json({
        message : "Here"
    })
})
app.listen(3000,() => {
    console.log("Listening on port 3000");
    
});