import mongoose from "mongoose";

const productscheema = mongoose.Schema({
    name:String,
    price:Number
})

const product = mongoose.model("products",productscheema);

export default product;