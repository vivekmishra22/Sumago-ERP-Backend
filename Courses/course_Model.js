const mongoose = require('mongoose')
const  data = mongoose.Schema({

// course_id:{
// type:String,
// type:Schema.Types.ObjectId,
//           ref:'technlogy', 

// required:true,
// },

// technology_name:{
// type:String,
// required:true,
// },
course_name:{
type:String,
required:true,
},
course_description:{
type:String,
required:true,
},
course_duration:{
type:String,
required:true,
},
course_fees:{
type:String,
required:true,
},
status:{
    type:String,
    required:true,
}
})
module.exports = mongoose.model('course',data);