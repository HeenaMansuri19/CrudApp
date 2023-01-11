const express = require('express')
const app = express();
const bodyparser = require('body-parser')
const port = 9000;
const mongoose = require("mongoose");
const crudSchema = require('./models/crudSchema');
const userRouter = require('./routers/userRouters')
require('./models/config')
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());



// mongoose.set("strictQuery", false);
// mongoose.connect("mongodb://127.0.0.1:27017/DemoDb", {
//     useNewUrlParser: "true",
// });


// mongoose.connection.on("error", (err) => {
//     console.log("mongoose connection error", err);
// });


// mongoose.connection.on("connected", (err, res) => {
//     console.log("mongoose connection succesfull");
// });


//Register
// app.post("/add", async (req, resp) => {
//     console.log(req.body);
//     //const cruddata=new crudschema(req.body)
//     const cruddata = new crudSchema({
//         name: req.body.name,
//         sub: req.body.sub,
//         email: req.body.email,
//     });
//     try {
//         const addRes = await cruddata.save();
//         resp.json({
//             status: "Succesful",
//             data: addRes
//         });

//     } catch (err) {
//         resp.send({
//             status: "Failure",
//             message: "Error Occur" + err.message
//         });
//     }
// });

// app.get("/",async (req,resp)=>{
//     try{
//         console.log("Get Request");
//         const crud=await crudSchema.find();
//         resp.json(crud);
//     }catch(err){
//         resp.send("Error"+err);
//     }
// });
app.use('/', userRouter)

app.listen(port,()=>{
    console.log(`server is running on port no:${port}`);
})
