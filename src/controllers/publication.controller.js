
const express=require("express")
const router=express.Router()

const Publication = require("../models/publication.model");

router.post("/",async(req,res)=>{
    try {
        let publication=await Publication.create(req.body)
        console.log(req.body)
        return res.send(publication)
    } 
    catch (error) {
        console.log(req)
        return res.send(error)
    }
})

module.exports=router