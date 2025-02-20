import express from "express"
import product from "../model/product.js"
import { creactproduct,getprodut,getname,deleteproduct } from "../conroler/productcontroler.js";

const productrouter = express.Router();

productrouter.get("/",getprodut)
productrouter.post("/",creactproduct)
productrouter.get("/byname",getname)
productrouter.delete("/:name",deleteproduct)
  

   export default productrouter;