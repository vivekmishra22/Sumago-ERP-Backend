const mongoose = require('mongoose');
// Const {mongoose,Schema} = require('mongoose');
const data = mongoose.Schema({
    // office_id:{
    //     type:String,
    //     type:Schema.Types.ObjectId,
    //               ref:‘city’,

    //     required:true,
    //     },

    office_name: {
        type: String,
        required: true,
    },
    city_name: {
        type: String,
        required: true,
    },
    status: {
        // type:active/inactive,
        type: String,
        required: true,
    }


})

module.exports = mongoose.model('office', data);

