import product from "../model/product.js"
import { isadmin } from "./usercontroler.js"
export function creactproduct(req,res){
if(!isadmin){
    res.json({
        masage:"To add product you must have to log as an admin"
    })
    return
}
   
const newproduct = new product(req.body)

newproduct.save().then(()=>{
    
 
    res.json({
        masage:"product saved"
    })
}).catch((err)=>{
    res.status(403).json({
        masage:err
    })
})

}

export function getprodut(req,res){
  product.find().then((list)=>{
    res.json({
        list:list
    })
  }).catch((err)=>{
     res.json({
        error:err
     })
  })
}

export async function getname(req,res){
    try{

const oneproduct = await product.find()
   
res.json({
    list:oneproduct
})
    }catch(e){
        res.json({
            error : e
        })
    }

    }
    




export function deleteproduct(req,res){
 
    const productId = req.params.name;

  product.deleteOne({productid :productId}).then(()=>{
    res.json({
        masage:"product deleted"
    })
  }).catch((err)=>{
    res.json({
        masage:err
    })
  })
}