import user from "../model/usermodel.js";

import bcrypt from "bcrypt"
import jwt from "jsonwebtoken";
import dotenv from "dotenv"
dotenv.config();

export function saveuser(req, res) {


    const newuserdata = req.body;
    if (newuserdata.type == "admin") {
        if (req.user.type == null) {
            res.json({
                masseg: "you have log admin accout to creact admin accunt"
            })
            return
        } if (req.user.type != "admin") {
            res.json({
                masseg: "you have log admin accout to creact admin accunt"
            })
        }
    }
    newuserdata.password = bcrypt.hashSync(newuserdata.password, 10)


    const newuser = new user(newuserdata);

    newuser.save().then(() => {
        res.json({
            masseg: "user saved"
        })
    }).catch((err) => {
        res.json({
            masseg: err
        })
    })
}

export function loginuser(req, res) {
    user.find({ email: req.body.email }).then((list) => {
        if (list.length === 0) {
            res.json({
                masseg: "no eny user that name"
            })
        }
        else {
            const user1 = list[0]
            const passwordmatch = bcrypt.compareSync(req.body.password, user1.password)
            if (passwordmatch) {
                const token = jwt.sign({
                    email: user1.email,
                    fristname: user1.fristname,
                    lastname: user1.lastname,
                    isblock: user1.isblock,
                    type: user1.type,
                    profilepic: user1.profilepic
                }, process.env.SECRECT)

                res.json({
                    masseg: "user log in",
                    token: token,
                    user:{
                        fristname:user1.fristname,
                        lastname:user1.  lastname,
                        type:user1.type,
                        profilepic:user1. profilepic,
                        email:user1. email

                    }

                    

                    

                    
                })
            }
            else {
                res.json({
                    masseg: "plz enter correct password"
                })
            }
        }
    }).catch((err) => {
        res.json({
            masseg: err
        })
    })
}

export function isadmin(req, res) {

    if (req.type == null) {
        return false
    }
    if (req.user.type != "admin") {
        return false
    }
    return true
}
export function customer(req, res) {

    if (req.type == null) {
        return false
    }
    if (req.user.type != "customer") {
        return false
    }
    return true
}
// admin john.doe@example55.com  "securepassword123"
// customer "john.doe@example551.com", "securepassword123"