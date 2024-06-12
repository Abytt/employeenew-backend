const cors = require("cors")
const express = require("express")
const mongoose = require("mongoose")

app.use(cors())
app.use(express.json())
mongoose.connect("mongodb+srv://abytomy:Aby2905@cluster0.zupck9h.mongodb.net/employeenewDB?retryWrites=true&w=majority&appName=Cluster0")

app.post("/Add",(req,res) => {
    res.json({"Status":"Success"})
})

app.get("/View",(req,res)=>{
    res.json({"Status":"Success"})
})

app.post("/Search",(req,res)=>{
    res.json({"Status":"Success"})

})

app.post("/Search",(req,res)=>{
    res.json({"Status":"Success"})

})

app.listen(8080,()=>{
    console.log("Server started")
})

