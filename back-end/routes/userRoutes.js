const express = require("express");
const { signup, signin } = require("../controllers/userController");
const userRouter = express.Router();

userRouter.post("/singup",signup);

userRouter.post("/singin", signin);

module.exports = userRouter;