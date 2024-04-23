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

app.post("/landing.html",(req,res)=>{
    const frontEndFile = path.join(__dirname,"..","/blog-html-css/landing.html");
	return res.status(200).sendFile(frontEndFile);
})

app.get("/landing.html",(req,res)=>{
    const frontEndFile = path.join(__dirname,"..","/blog-html-css/landing.html");
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

app.get("/about.html",(req,res)=>{
    const frontEndFile = path.join(__dirname,"..","/blog-html-css/about.html");
	return res.status(200).sendFile(frontEndFile);
})

app.get("/blog-html-css/admin/posts/index.html",(req,res)=>{
    const frontEndFile = path.join(__dirname,"..","/blog-html-css/admin/posts/index.html");
	return res.status(200).sendFile(frontEndFile);
})

app.get("/blog-html-css/admin/posts/create.html",(req,res)=>{
    const frontEndFile = path.join(__dirname,"..","/blog-html-css/admin/posts/create.html");
	return res.status(200).sendFile(frontEndFile);
})

app.get("/blog-html-css/admin/users/index.html",(req,res)=>{
    const frontEndFile = path.join(__dirname,"..","/blog-html-css/admin/users/index.html");
	return res.status(200).sendFile(frontEndFile);
})

app.get("/blog-html-css/admin/users/create.html",(req,res)=>{
    const frontEndFile = path.join(__dirname,"..","/blog-html-css/admin/users/create.html");
	return res.status(200).sendFile(frontEndFile);
})

app.post("/blog-html-css/admin/users/create.html",(req,res)=>{
    const frontEndFile = path.join(__dirname,"..","/blog-html-css/admin/users/create.html");
	return res.status(200).sendFile(frontEndFile);
})

app.get("/blog-html-css/admin/topics/index.html",(req,res)=>{
    const frontEndFile = path.join(__dirname,"..","/blog-html-css/admin/topics/index.html");
	return res.status(200).sendFile(frontEndFile);
})

app.get("/blog-html-css/admin/topics/create.html",(req,res)=>{
    const frontEndFile = path.join(__dirname,"..","/blog-html-css/admin/topics/create.html");
	return res.status(200).sendFile(frontEndFile);
})

app.post("/blog-html-css/admin/topics/create.html",(req,res)=>{
    const frontEndFile = path.join(__dirname,"..","/blog-html-css/admin/topics/create.html");
	return res.status(200).sendFile(frontEndFile);
})

app.get("/blog-html-css/login.html",(req,res)=>{
    const frontEndFile = path.join(__dirname,"..","/blog-html-css/login.html");
	return res.status(200).sendFile(frontEndFile);
})

app.get("/blog-html-css/register.html",(req,res)=>{
    const frontEndFile = path.join(__dirname,"..","/blog-html-css/register.html");
	return res.status(200).sendFile(frontEndFile);
})


app.post("/blog-html-css/landing.html",(req,res)=>{
    const frontEndFile = path.join(__dirname,"..","/blog-html-css/landing.html");
	return res.status(200).sendFile(frontEndFile);
})

app.get("/blog-html-css/landing.html",(req,res)=>{
    const frontEndFile = path.join(__dirname,"..","/blog-html-css/landing.html");
	return res.status(200).sendFile(frontEndFile);
})



app.get("/single.html",(req,res)=>{
    const frontEndFile = path.join(__dirname,"..","/blog-html-css/single.html");
	return res.status(200).sendFile(frontEndFile);
})


app.listen(PORT,()=>{
    console.log(`Listening on port:${PORT}`)
})
