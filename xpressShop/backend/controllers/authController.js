import userModel from "../models/userModel.js"
import { hashPassword,comparePassword } from "../helpers/authHelper.js"
import JWT from "jsonwebtoken"
export const registerController= async (req,res)=>{
     try{
              const {email,password,name,address,phone,answer}=req.body;
              const existinguser= await userModel.findOne({email})
              if(existinguser){
                
                 res.status(200).json({
                  success:false,
                    message:"already register please login"
                })
                
              }
              
              
              const hashedPassword=await hashPassword(password);
              const user=await new userModel({email,name,phone,address,password:hashedPassword,answer}).save();

             res.status(201).json({
                success:true,
                message:"you are register",
                user
                
              })
              
              



     } catch(error){
        console.log(error);
        res.status(500).json({
            success:false,
            error
        })
     }

}

//LOGIN USER
export const loginController=async(req,res)=>{
  try{
     const {email,password}=req.body;
     if(!email || !password){
      res.status(404).json({
        success:false,
        message:"Invalid email or password"
      })
     }
     //if not register
     const user=await userModel.findOne({email})
     if(!user){
        res.status(404).json({
          success:false,
          message:'please register'
        })
     }

     const match=await comparePassword(password,user.password);
     if(!match){
      res.status(200).json({
        success:false,
        message:"Invalid Password"
      })
     }
    // create token 
       const token=JWT.sign({_id:user._id},process.env.JWT_SECRET,{expiresIn:"5d"});
       req.user=user
       res.status(200).json({
        success:true,
        message:"you are logged in",
        user:{
          email:user.email,
          name:user.name,
          phone:user.phone,
          address:user.address,
          role:user.role
        },
        token
       })
    


    }
    catch(error){
      console.log(error)
      res.status(500).json({
        success:false,
        message:"Error in login",
        error
      })
    }

}
// forgot-password

export const forgotPasswordController=async(req,res)=>{
 try{
     const {email,answer,newpassword}=req.body;
     if(!email){
      res.status(400).json({
        message:"Email is required"
      })
     }
     if(!answer){
      res.status(400).json({message:"answer is required"})
     }
   if(!newpassword){
    res.status(400).json({message:"new password  is required"})
   }
   // check
   const user=await userModel.findOne({email,answer})
   //validation
   if(!user){
    return res.status(404).json({
      success:false,
      message:"Wrong Email Or Answer"
    })
   }
   const hashed=await hashPassword(newpassword)
   await userModel.findByIdAndUpdate(user._id,{password:hashed});
   res.status(200).json({
    success:true,
    message:"Password Reset Successfully"
    
   })
 }catch(err){
  console.log({galti:err});
  res.status(500).json({
    success:false,
    message:"Something went Wrong",
    err
  })
 }

}
// test
export const  protectRouter=async (req,res)=>{
  res.status(200).json({
    message:"protected routes"
  })
}

