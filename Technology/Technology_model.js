const mongoose = require ('mongoose')
const data = mongoose.Schema({
    
    name: String,
    status:String
})

module.exports = mongoose.model('technology',data);

