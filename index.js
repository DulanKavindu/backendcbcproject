import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import studentrouter from "./routers/studentrouter.js";
import productrouter from "./routers/productrouter.js";
import userrouter from "./routers/userouter.js";
import jwt from "jsonwebtoken"
import dotenv  from "dotenv";
dotenv.config();
 const app = express();

 const mongourl = process.env.MONGODBURL;

 mongoose.connect(mongourl,{});
 const connection = mongoose.connection;
 app.use(bodyParser.json());

 connection.once("open",()=>{
   console.log("DATA BASE CONECTED")
 })
app.use((req,res,next)=>{
  const token = req.header("Authorization")?.replace("Bearer ","");
  if (token!=null)
  {
    jwt.verify(token ,process.env.SECRECT,(error,decode)=>{
      if(!error)
      {
        req.user=decode
      }
    })
    
  }
  next()
})

 app.use("/api/student",studentrouter)
 app.use("/api/product",productrouter)
 app.use("/api/user",userrouter)

 

 
    
 

 app.listen(
    3000,()=>{
        console.log("port runing on 3000")
    }
)