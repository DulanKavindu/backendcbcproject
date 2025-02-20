import express from "express";
import student from "../model/student.js";
import { getstudent ,  poststudent,deletestudent } from "../conroler/studentcontroer.js";

const studentrouter = express.Router()

studentrouter.get("/",getstudent)


studentrouter.post("/",poststudent)

studentrouter.delete("/",deletestudent)
  
 
export default studentrouter;