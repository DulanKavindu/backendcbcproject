import mongoose from "mongoose";

const userscheema = mongoose.Schema({
    email :{
        type:String,
        require:true,
        unique:true
    },
    fristname :{
        type: String,
        require:true
    },
    lastname :{
        type: String,
        require:true
    },
    password :{
        type: String,
        require:true
    },
    isblock :{
        type: Boolean,
        default:false
    },
    type :{
        type: String,
        default:"customer"
    },
    profilepic :{
        type: String,
        default:"https://www.google.com/imgres?q=profile%20pictures&imgurl=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F14653174%2Fpexels-photo-14653174.jpeg&imgrefurl=https%3A%2F%2Fwww.pexels.com%2Fphoto%2Fsilhouette-of-a-boys-profile-against-sunset-sky-14653174%2F&docid=zbgYMzPRRJyjxM&tbnid=kn6HalGYPsx7QM&vet=12ahUKEwjBxuTpldCLAxWQTmwGHcC1BtsQM3oECEoQAA..i&w=3712&h=3711&hcb=2&ved=2ahUKEwjBxuTpldCLAxWQTmwGHcC1BtsQM3oECEoQAA"
    },

})
 const user = mongoose.model("users",userscheema);

 export default user;