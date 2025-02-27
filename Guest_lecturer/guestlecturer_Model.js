const mongoose = require('mongoose')
const data = mongoose.Schema({

    guest_lecturer_name: {
        type: String,
        required: true,
        },
        lecture_topic_description: {
        type: String,
        required: true,
        },
        guest_lecture_batch: {
        type: String,
        required:true,
        },
        guest_lecture_date: {
        type: Date,
        required: true,
        },
        status: {
            type: String,
            required: true,
        }
        })
    module.exports = mongoose.model('guestlecturer',data);