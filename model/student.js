import mongoose from "mongoose"

const studentschhema = mongoose.Schema({
    name: String,
    age : Number,
    gender: String
})
const student = mongoose.model("students",studentschhema)

export default student;