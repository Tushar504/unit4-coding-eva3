const express=require("express")
const { body, validationResult } = require('express-validator');
const router=express.Router()
const upload=require("../middlewares/upload");
const User = require("../models/user.model");

router.post("/",upload.single('profileImages'),
body("firstName")
.not()
.isEmpty()
.isLength({min:3,max:30}),
body("lastName")
.isLength({min:3,max:30}),
body("age").custom((value)=>{
    if(value>=1 && value<=150){
        return true
    }
    else{
        throw new Error("age must be between 1 to 150")
    }
}),
body("email").isEmail(),async(req,res)=>{
    try {
        let user=await User.create({
            firstName:req.body.firstName,
            lastName:req.body.lastName,
            age:req.body.age,
            email:req.body.email,
            profileImages:req.file.path
        })
        return res.send(user)
    } 
    catch (error) {
        return res.send(error)
    }
})

module.exports=router