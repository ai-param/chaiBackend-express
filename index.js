const express = require("express");
const path = require("path");
require("dotenv").config();
const app = express();
// const PORT = 3000;

app.use(express.static(path.join(__dirname,'public')));

app.get('/',(req,res)=>{
    res.send("Hii chai aur code");
})

app.get('/twitter',(req,res)=>{
    res.send("Hello from Twitter");
})

app.get('/file',(req,res)=>{
    res.sendFile(path.join(__dirname,"index.html"));
})

app.get('/login',(req,res)=>{
    res.send("<h1>Welcome to the login Page</h1>");
})

app.listen(process.env.PORT,()=>{
    console.log(`App is listening on Port ${process.env.PORT}`); 
});