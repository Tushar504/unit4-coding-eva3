const multer  = require('multer')
const path=require("path")
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname,"../uploads"))
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() 
      cb(null,uniqueSuffix+"-"+file.originalname)
    }
  })

  function fileFilter (req, file, cb) {

   if(file.mimetype==="image/jpeg" || file.mimetype=="image/png"){
       cb(null,true)
   }
   else{
       cb(null,false)
   }
  
  }
const options={
    storage:storage,
    fileFilter:fileFilter,
    limits:{
        fileSize:1024*1024*5
    }
}
const upload=multer(options)

module.exports=upload