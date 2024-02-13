import express from "express";
import {requireSignIn,isAdmin} from "../middleware/authMiddleware.js"
import {registerController,loginController, protectRouter,forgotPasswordController} from "../controllers/authController.js"
const router=express.Router();
 router.post("/register",registerController)
 router.post("/login",loginController)
 router.post("/forgot-password",forgotPasswordController)
 router.get("/test",requireSignIn,isAdmin,protectRouter)
 router.get("/user-auth",requireSignIn,(req,res)=>{
    res.status(200).json({ok:true});

 });
 router.get("/admin-auth",requireSignIn,isAdmin,(req,res)=>{
   res.status(200).json({ok:true});
   
 })
 

 export default router;
