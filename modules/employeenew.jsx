const mongoose=require("mongoose")
const Schema=mongoose.Schema(
    {
        "Emp_name":String,
        "Emp_code":String,
        "Emp_mobile":String
    }
)

let employeemodel=mongoose.model("employee",Schmea);
module.exports={employeemodel}