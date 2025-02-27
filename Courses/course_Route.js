const {add, getdata, getbyId, Update, Delete } = require ('./course_Controller');

const express = require ('express');

const route = express.Router()

route.post('/addCourse', add);
route.get('/getdataCourse', getdata);
route.get('/getbyIdCourse/:_id', getbyId);
route.put('/UpdateCourse/:_id', Update);
route.delete('/deleteCourse/:_id', Delete);
// route.post('/addplans',add)


module.exports = route
