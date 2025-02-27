const {add, getdata, getbyId, Update, Delete } = require ('../Office_City/office_City_Controller');

const express = require ('express');

const route = express.Router()

route.post('/addOfficeCity', add);
route.get('/getdataOfficeCity', getdata);
route.get('/getbyIdOfficeCity/:_id', getbyId);
route.put('/UpdateOfficeCity/:_id', Update);
route.delete('/deleteOfficeCity/:_id', Delete);
// route.post('/addplans',add)


module.exports = route
