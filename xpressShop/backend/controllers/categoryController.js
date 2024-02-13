import { trusted } from "mongoose";
import CategoryModel from "../models/CategoryModel.js"
import slugify from "slugify";
export const createCategoryController=async (req,res)=>{

 try{
    const {name}=req.body;
    
    if(!name){

        return res.status(401).json({
         message:"please enter the name",  
        })
    }

    const existingCategory=await CategoryModel.findOne({name})
    if(existingCategory){
        return res.status(200).json({
            success:true, 
            message:"Category Already Exists"
        })
    }
    const category=await new CategoryModel({name,slug:slugify(name)}).save();
    res.status(201).json({
        success:true,
        message:"new category created",
        category
    })
    }catch(error){
    console.log(error)
    res.status(500).json({
        success:false,
        error,
        message:"Error in Category"
      
    })
 }

}
// update category

export const updateCategoryController=async (req,res)=>{
    try{
         const {name} =req.body;
         const {id} =req.params;
         const category=await CategoryModel.findByIdAndUpdate(id,{name,slug:slugify(name)},{new:true})   
          res.status(200).json({
            success:true,
            message:"Category Updated Successfully",
            category
          })
           

    }
    catch(error){
      res.status(500).json({
        success:false,
        message:"Error while updating category",
        error
      })
    }
}
// get all category 

export const categoryController=async(req,res)=>{
  try{
     const category=await CategoryModel.find();
     res.status(200).json({
      success:true,
      message:"All Categories List",
      category
     });
       

  }
  catch(error){
    res.status(500).json({
      success:false,
      error,
      message:"errror to getting categories"
    })
  }
}
// single category
export const singleCategoryController=async(req,res)=>{
  try{
    const {slug}=req.params;
    const category=await CategoryModel.findOne({slug});
    res.status(200).json({
      success:true,
      category
    })


  }catch(error){
    console.log(error);
    res.status(500).json({
      success:false,
      message:"error while getting categeries"
    })
  }
}

// delete category ex

export const deleteCategory=async(req,res)=>{
  try{
     const {id}=req.params.id;
     
     const category=await CategoryModel.findOne({id})
     if(!category){
      res.status(400).json({
        success:false,
        message:"catogory does not exist"
      })
     }
     await CategoryModel.deleteOne({id});
     res.status(200).json({
      success:true,
      message:"item deleted",
      category

     })


  }catch(error){
    console.log(error);
    res.status(500).json({
      success:false,
     message:"Error in deleting category"

    })
  }
}