// server index
const express = require("express");
const app = express();
const userRouter = require("./routes/userRoutes");
const mongodb = require("mongoose");
const cors = require('cors')

app.use(cors())
app.use(express.json());

app.use("/users", userRouter);

app.get("/",(req, res) => {
    res.send("Hello");
})

mongodb.connect("mongodb+srv://nammon:nammonmongo@cluster1.fikbndk.mongodb.net/?retryWrites=true&w=majority")
.then(() => {
    app.listen(8080, () =>{
        console.log("server start on port 8080");
    })
})
