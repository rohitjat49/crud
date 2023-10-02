const mongoose = require("mongoose")


const regiterSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique: true
    },
    age:{
        type:String,
        required:true
    },
    number:{
        type:Number,
        required:true
    },
    work: {
        type:String,
        required:true
    },
    add: {
        type:String,
        required:true
    },
    desc:{
        type:String,
        required:true
    },   
})

const UsersRegister = new mongoose.model("UsersRegister", regiterSchema)

module.exports = UsersRegister;