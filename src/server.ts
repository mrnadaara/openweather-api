import express from "express";
import { serverPort } from "./config";

const app = express();

app.use(express.json())

app.use("/", (req, res) => {
    res.json("Server is running")
});

app.listen(serverPort, () => {
    console.log(`Server is running at port ${serverPort}`)
})

export default app;