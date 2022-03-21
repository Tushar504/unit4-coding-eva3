const express=require("express")

const app=express()
const userController=require("./controllers/user.controller")
app.use("/user",userController)

const bookController=require("./controllers/book.controller")
app.use("/book",bookController)

const publicationController=require("./controllers/publication.controller")
app.use("/publication",publicationController)

module.exports=app