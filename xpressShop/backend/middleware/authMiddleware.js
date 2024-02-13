import JWT from  "jsonwebtoken"
import userModel from "../models/userModel.js";
export const requireSignIn=async (req,res,next)=>{
    try{
       const decode=JWT.verify(req.headers.authorization,process.env.JWT_SECRET);
         req.user=decode;
        
        next();
         
        


    }catch(error){ 
        res.status(400).json({
            message:error,
            message2:"bhai error jwt m h"
        
        })
    }
    
}

// for admin 
export const isAdmin=async (req,res,next)=>{
    try{
        const user=await userModel.findById(req.user._id);
        if(user.role!==1){
            res.status(401).json({
                success:false,
                message:"unauthorize access",
                message2:"bhai error is admin m h"
            })
        }else{
            next();

        }
        


    }catch(error){
        console.log(error)
        console.log("bhai error isi m h is admin")

    }
    
}