import express from "express";
import { saveuser,loginuser } from "../conroler/usercontroler.js";


const userrouter = express.Router();
  
userrouter.post("/",saveuser);
userrouter.post("/login",loginuser);

export default userrouter;
