import product from "../model/product.js"
export function creactproduct(req,res){

    if(req.user==null)
        {
            res.json({
                masage:"frist you have to log in"
            })
            return;
        }
const newproduct = new product(req.body)

newproduct.save().then(()=>{
    
 
    res.json({
        masage:"product saved"
    })
}).catch((err)=>{
    res.json({
        masage:err
    })
})

}

export function getprodut(req,res){
    res.json({
        masage:"this is the prouduct get"
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
 
  product.deleteOne({name :req.params.name}).then(()=>{
    res.json({
        masage:"product deleted"
    })
  }).catch((err)=>{
    res.json({
        masage:err
    })
  })
}