import express from "express"
import { createoder } from "../conroler/odercontrole.js"

const odrtrouter = express.Router()

odrtrouter.post("/",createoder);

export default odrtrouter