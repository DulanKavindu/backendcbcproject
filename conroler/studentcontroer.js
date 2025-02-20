import student from "../model/student.js";

export function getstudent(req,res){

    student.find().then((studentlist)=>{
        res.json({
            list:studentlist
        })
     })
}

export function poststudent(req,res){
    const newstudent = new student(req.body)

    newstudent.save().then(()=>{
     res.json({
        masage:"student saved"
     })
    }).catch(()=>{
     res.json({
        masage:"student  not saved"
     })
    })
}

export function deletestudent(req,res){(
    student.deleteOne({name:req.body.name}).then(()=>{
        res.json({
            masage:"student delected"
        })
    })
)}