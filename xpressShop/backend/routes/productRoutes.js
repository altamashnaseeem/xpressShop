import express from "express"
import {isAdmin,requireSignIn} from "../middleware/authMiddleware.js"
import { createProductController, deleteProductController, getAllProductController, getSingleProductController, updateProductController,productPhotoController} from "../controllers/productController.js";
import formidable from "express-formidable"
const router=express.Router();
router.post("/create-product",requireSignIn,isAdmin,formidable(),createProductController);
router.put("/update-product/:pid",requireSignIn,isAdmin,formidable(),updateProductController);
router.get("/get-product",getAllProductController);
router.get("/get-product/:id",getSingleProductController)
router.get("/delete-product/:id",requireSignIn,isAdmin,deleteProductController);
router.get("/product-photo/:pid",productPhotoController);

export default router;

