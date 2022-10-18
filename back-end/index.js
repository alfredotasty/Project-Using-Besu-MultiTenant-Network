// server index
const express = require("express");
const app = express();
const userRouter = require("./routes/userRoutes");
const mongodb = require("mongoose");


app.use(express.json());

app.use("/users", userRouter);

app.get("/",(req, res) => {
    res.send("Hello");
})


mongodb.connect("mongodb+srv://nammon:nammonmongo@privateblockchaincluste.afibly8.mongodb.net/?retryWrites=true&w=majority")
.then(() => {
    app.listen(8080, () =>{
        console.log("server start on port 8080");
    })
})
