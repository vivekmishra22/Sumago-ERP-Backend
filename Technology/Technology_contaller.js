const model = require('../Technology/Technology_model')

// post API
const add = async(req, res) => {
    const {  name, status} = req.body;
    try {
        const data = new model({
             name, status
        });
        const userdata = await data.save()
        res.send({userdata});
    }
    catch (error){
        console.log(error);
        return res.status(500).json({ message:'internal servar error'})
    }
}

// Get API
const getdata = async(req, res) => {
    try{
        const data = await model.find()
        res.status(200).send({data});
    }catch(err){
        console.log(err);
        return res.status(500).json({message : "Internal server error"})
    }
}

// getById API
const getbyIdtechnology = async (req, res) => {
    try{
        const data = await model.findOne({_id: req.params})
        res.status(200).send({data});
    }catch (error) {
        console.log(error);
    }
}

// Delete API
const deleteTechnology = async (req, res) => {
    try{
        const userdata = await model.deleteOne({_id: req.params._id})
        res.status(200).send({userdata});
    }catch (error) {
        // console.log(err);
        res.status(500).send(err);
    }
}


//Update API
const UpdateTechnology = async (req, res) => {
    const {technologyid, name, status} = req.body;
    try{
        const data = await model.updateOne(
            {_id: req.params._id},
            { $set: {
                 name, status
            },}
            
        );
        if (data) {
            res.status(200).send({message: "user update found"});
        }else{
            res.status(300).send({message: "user update not found"});
        }

    }catch (error) {
        console.log(error);
        res.status(500).send({message: " Internal server error"})
    }
};


module.exports = {add, getdata, getbyIdtechnology, deleteTechnology, UpdateTechnology}

