const express = require('express');
const app = express();
const multer = require('multer');
const path = require('path');
const viewsPath = path.join(__dirname,'views');
const port = process.env.PORT || 3000
const multerOptions = {
    storage: multer.memoryStorage(),
    fileFilter(req,file,next){
       if(file){
           next(null,true);
       }else{
           return Error('You must supply a file');
           
       }

    }
}


app.set('views',viewsPath);
app.set('view engine','ejs');

const upload = multer(multerOptions).single('file');

app.get('/',(req,res)=>{
    res.render('home',{title:"Home"})
})

app.post('/',upload,async (req,res)=>{
    console.log(req.file.size);
    res.json({file_size:`${req.file.size} bytes`});
})

app.listen(port,()=>{
    console.log("Server is up and running")
})