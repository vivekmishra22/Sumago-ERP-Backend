    const mongoose = require ('mongoose')
    const data = mongoose.Schema({
       
        city_name:{
            type:String,
            required:true,
        },
        status:{
            // type:active/inactive,
            type:String,
            required:true,
        }
    })
    
    module.exports = mongoose.model('city',data);
    
    