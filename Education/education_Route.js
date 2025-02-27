const { add, getdata, getbyId, Update, Delete } = require('../Education/education_Controller');

const express = require('express');

const route = express.Router()

route.post('/addEducation', add);
route.get('/getdataEducation', getdata);
route.get('/getbyIdEducation/:_id', getbyId);
route.put('/UpdateEducation/:_id', Update);
route.delete('/deleteEducation/:_id', Delete);

module.exports = route
