import express from "express"

import { isAdmin, requireSignIn } from "../middleware/authMiddleware.js";
import { categoryController, createCategoryController,deleteCategory,singleCategoryController,updateCategoryController } from "../controllers/categoryController.js";
const router=express.Router()
router.post("/create-category",requireSignIn,isAdmin,createCategoryController)
router.put("/update-category/:id",requireSignIn,isAdmin,updateCategoryController)
router.get("/get-category",categoryController)
router.get("/get-category/:slug",singleCategoryController)
router.delete("/delete-category/:id",requireSignIn,isAdmin,deleteCategory)
export default router;
