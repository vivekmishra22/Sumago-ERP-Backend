const {add, getdata, getbyId, Update, Delete } = require ('../College/college_Controller');

const express = require ('express');

const route = express.Router()

route.post('/addCollege', add);
route.get('/getdataCollege', getdata);
route.get('/getbyIdCollege/:_id', getbyId);
route.put('/UpdateCollege/:_id', Update);
route.delete('/deleteCollege/:_id', Delete);

module.exports = route
