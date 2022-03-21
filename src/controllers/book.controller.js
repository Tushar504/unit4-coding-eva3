const express=require("express")
const router=express.Router()
const upload=require("../middlewares/upload");
const Book = require("../models/book.model");

router.post("/",upload.single('coverImage'),async(req,res)=>{
    try {
        let book=await Book.create({
            likes:req.body.likes,
            coverImage:req.file.path,
           content:req.body.content,
           user_id:req.body.user_id
               
        })
        return res.send(book)
    } 
    catch (error) {
        return res.send(error)
    }
})

module.exports=router