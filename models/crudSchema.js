const mongoose = require("mongoose");
const crudSchema = new mongoose.Schema({
    name:
    {
        type:String,
        require:true,
    },
    sub:
    {
        type:String,
        require:true,
        default:false,
    },
    email:
    {
        type:String,
        require:true,
    },
});


module.exports=mongoose.model("user",crudSchema);