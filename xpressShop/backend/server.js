import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import authRoutes from "../backend/routes/authRoutes.js"
import categoryRoutes from "./routes/categoryRoutes.js"
import productRoutes from "./routes/productRoutes.js"
import cors from "cors"
dotenv.config();
const server=express();
const PORT=process.env.PORT || 9000;
server.use(cors());
server.use(express.json());
// connect mongodb 
server.use("/api/v1/auth",authRoutes);
server.use("/api/v1/category",categoryRoutes)
server.use("/api/v1/product",productRoutes)
mongoose.connect(process.env.MONGO_URL);



server.listen(PORT,()=>{
console.log(`server is working on ${process.env.PORT}`)

})

   

