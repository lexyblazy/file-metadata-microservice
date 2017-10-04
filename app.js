const express = require('express');
const app = express();
const multer = require('multer');
const path = require('path');
const viewsPath = path.join(__dirname,'views');
const port = process.env.PORT || 3000

app.set('views',viewsPath);
app.set('view engine','ejs');



app.get('/',(req,res)=>{
    res.render('home',{title:"Home"})
})

app.listen(port,()=>{
    console.log("Server is up and running")
})