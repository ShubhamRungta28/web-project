const express = require("express");
const bodyParser = require('body-parser');
const path = require("path");

const app = express();  
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const PORT= 5000
require('dotenv').config()

app.use(express.static(path.join(__dirname,'..','blog-html-css','public')))
app.use(express.json())

app.get("/",(req,res)=>{
    const frontEndFile = path.join(__dirname,"..","/blog-html-css/login.html");
	return res.status(200).sendFile(frontEndFile);
})

app.post("/index.html",(req,res)=>{
    const frontEndFile = path.join(__dirname,"..","/blog-html-css/index.html");
	return res.status(200).sendFile(frontEndFile);
})

app.get("/login.html",(req,res)=>{
    const frontEndFile = path.join(__dirname,"..","/blog-html-css/login.html");
	return res.status(200).sendFile(frontEndFile);
})

app.get("/register.html",(req,res)=>{
    const frontEndFile = path.join(__dirname,"..","/blog-html-css/register.html");
	return res.status(200).sendFile(frontEndFile);
})


app.get("/single.html",(req,res)=>{
    const frontEndFile = path.join(__dirname,"..","/blog-html-css/single.html");
	return res.status(200).sendFile(frontEndFile);
})


app.listen(PORT,()=>{
    console.log(`Listening on port:${PORT}`)
})
