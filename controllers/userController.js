const crudSchema = require('../models/crudSchema')


const getUser = async (req, res) => {
    try {
        console.log("Get Request");
        const crud = await crudSchema.find();
        res.json(crud);
    } catch (err) {
        res.send("Error" + err);
    }
};


const createUser = async (req, res) => {
    console.log(req.body);

    const cruddata = new crudSchema({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
    });
    try {
        const addRes = await cruddata.save();
        res.json.status(201)({
            status: "succesful",
            data: addRes
        });

    } catch (err) {
        res.send({
            status: "failure",
            message: "Error occur" + err.message
        });
    }
};

const updateUser = async (req, res) => {
    console.log(req.params.id);
    try {
        const crud = await crudSchema.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });
        res.json(crud);
    } catch (err) {
        res.send("Error" + err);
    }
};

const deleteUser = async (req, res) => {
    await crudSchema.findByIdAndDelete(req.params.id);
    try {
        res.json({
            status: "failed",
            message: err,
        });
    } catch (err) {
        res.send("Error" + err);
    }
};


module.exports = {
    getUser,
    createUser,
    updateUser,
    deleteUser
};