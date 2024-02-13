import productModel from "../models/productModel.js"
import fs from 'fs'

export const createProductController=async(req,res)=>{
    try{
        
 const {name,description,price,category,quantity,shipping} =req.fields
 const {photo}=req.files;
 // VALIDATION

 switch(true){
    case !name:
        return res.status(500).json({error:"name is required"})
    case !description:
        return res.status(500).json({error:"description is required"})
    case !price:
        return res.status(500).json({error:"price is required"})
    case !category:
        return res.status(500).json({error:"category is required"})
    case !quantity:
        return res.status(500).json({error:"Quantity is required"})
    case photo && photo.size>1000000:
        return res.status(500).json({
            error:"photo is required and should be less than 1mb"
        })
 }
 const products=new productModel({...req.fields})
 if(photo){
    products.photo.data=fs.readFileSync(photo.path)
    products.photo.contentType=photo.type


 }
 await products.save();
 res.status(201).json({
    success:true,
    message:"Product  Created Successfully",
    products
 });

    }catch(error){
        res.status(500).json({
            success:false,
            message:"error in create product",

            error
        })
    }
}

// update product
export const updateProductController=async(req,res)=>{
    try{
        
        
        const {name,description,price,category,quantity,shipping} =req.fields
        console.log(name)
        const {photo}=req.files;
         
        // VALIDATION
      
        switch(true){
           case !name:
               return res.status(500).json({error:"name is required"})
           case !description:
               return res.status(500).json({error:"description is required"})
           case !price:
               return res.status(500).json({error:"price is required"})
           case !category:
               return res.status(500).json({error:"category is required"})
           case !quantity:
               return res.status(500).json({error:"Quantity is required"})
           case photo && photo.size>1000000:
               return res.status(500).json({
                   error:"photo is required and should be less than 1mb"
               })
        }
        const products=await productModel.findByIdAndUpdate(req.params.pid,{...req.fields},{new:true})

        if(photo){
           products.photo.data=fs.readFileSync(photo.path)
           products.photo.contentType=photo.type
       
       
        }
        await products.save();
       
           res.status(201).json({
           success:true,
           message:"Product updated Successfully",
           products
        });
       
           }catch(error){
               res.status(500).json({
                   success:false,
                   message:"error in update product",
                   err:error
                
               })
           }
}

// get all product

export const getAllProductController=async(req,res)=>{
    try{
          const products= await productModel.find({}).populate('category').select("-photo").limit(12).sort({createdAt:-1});
          
         res.status(200).json({
            success:true,
            message:"products get  successfully",
            products
         })
         
    }catch(error){
        res.status(500).json({
            success:false,
            message:"error to get  product",
            error
        })
    }
}

// get single product
export const getSingleProductController=async(req,res)=>{
    try{
          const {id}=req.params;
       const product=await productModel.findById(id).select("-photo").populate('category')
       if(!product){
        
        res.status(400).json({
            success:false,
            message:"product does not exist"
        })
       }
         res.status(200).json({
            success:true,
            message:"product get  successfully",
            product
         })
    }catch(error){
        res.status(500).json({
            success:false,
            message:"error to get  product",
            error
        })
    }
}
// delete product details

export const deleteProductController=async(req,res)=>{
    try{
         const {id}=req.params;
         const product=await productModel.findById(id).select("-photo");

         if(!product){
            
            res.status(400).json({
                success:false,
                message:"product does not exists"
            })
         }
        await productModel.deleteOne(product);

         res.status(200).json({
            success:true,
            message:"products DELETED successfully",
            product
         })
    }catch(error){
        res.status(500).json({
            success:false,
            message:"error to DELETE product",
            error
        })
    }
}

// get product photo
export const productPhotoController=async(req,res)=>{
    try{
        const product=await productModel.findById(req.params.pid).select("photo");
        if(product.photo.data){
            res.set("Content-type",product.photo.contentType)
            return res.status(200).json(product.photo.data)
        }

    }catch(error){
        console.log(error);
        res.status(500).json({
           success:false,
           message:"error in getting photo",
            error
        })
    }


}