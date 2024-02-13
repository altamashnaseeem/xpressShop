import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true

    },
    password:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:[true,"please enter email"],
        unique:true
    },
    phone:{
        type:Number,
        required:true
    },
    answer:{
        type:String,
        required:true
    },
    
    role:{
        type:Number,
        default:0
    }

},{timestamps:true})

export default mongoose.model("users",userSchema)