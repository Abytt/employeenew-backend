const cors = require("cors")
const express = require("express")
const mongoose = require("mongoose")
const {employeemodel}=require("./modules/employee")

const app=express()
app.use(cors())
app.use(express.json())
mongoose.connect("mongodb+srv://abytomy:Aby2905@cluster0.zupck9h.mongodb.net/employeenewDB?retryWrites=true&w=majority&appName=Cluster0")





app.post("/Add",(req,res) => {
   let input = req.body
    let employee = new employeemodel(input)
    employee.save()
    console.log(employee)
    res.json({ "Status": "Success" })
})

app.get("/View", (req, res) => {
    employeemodel.find().then(
        (data) => {
            res.json(data)
        }

    ).catch(
        (error) => {
            res.json(error)
        }

    )

})



app.post("/Search", (req, res) => {
    let input = req.body
    employeemodel.find(input).then(
        (data) => {
            res.json(data)
        }

    ).catch(
        (error) => {
            res.json(error)
        }

    )

})

app.post("/Delete", (req, res) => {
    let input = req.body
    employeemodel.findByIdAndDelete(input._id).then(
        (response) => {
            res.json({"status":"success"})
        }
        

    ).catch(
        (error) => {
            res.json(error)
        }

    )

})

app.listen(8080,()=>{
    console.log("Server started")
})

