
const dotenv =require('dotenv')
dotenv.config({ path: '../.env' }) // warning when don't forget path when in complex directory
const userModel = require("../models/user")
const jwt = require("jsonwebtoken")
const signup = async (req, res) => {

    const{username, password} = req.body;
    try{
        // find user that alrady in db
        const existingUser = await userModel.findOne({username : username});
        if(existingUser){
            return res.status(400).json({message: "user already exist"});
        }
        // create new user 
        const result = await userModel.create({
            username: username,
            password: password
        })
        
        // Token payload
        const userPayload = {
            permission: ["*;*"],
            privacyPublicKey: process.env.tesseraNode1,
            exp: 1600899999002
        }
        // create token and get respond in json form and rerurn 201 create success
        const token = jwt.sign({userPayload},process.env.userRSA);
        res.status(201).json({ user: result, token: token })


    } catch(err){
        console.log(err);
        res.status(500).json({message: "some thing went wrong"})

    }

}

const signin = (req, res) => {

}

module.exports = {signup, signin};