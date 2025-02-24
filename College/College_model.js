    const mongoose = require ('mongoose')
    const data = mongoose.Schema({
        
        university_name:{
            type:String,
            required:true,
        },
        college_name:{
            type:String,
            required:true,
        },
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
    
    module.exports = mongoose.model('college',data);
    
    