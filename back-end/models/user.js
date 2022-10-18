const mongodb = require("mongoose");

const UserSchema = mongodb.Schema({
    username : {
        type: String,
        required: true
    },
    password : {
        type: String,
        required: true
    }
}, {timestamps : true});

module.exports = mongodb.model("User", UserSchema)