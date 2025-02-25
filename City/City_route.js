const {add, getdata, getbyId, Update, Delete } = require ('../City/city_Controller');

const express = require ('express');

const route = express.Router()

route.post('/addCity', add);
route.get('/getdataCity', getdata);
route.get('/getbyIdCity/:_id', getbyId);
route.put('/UpdateCity/:_id', Update);
route.delete('/deleteCity/:_id', Delete);
// route.post('/addplans',add)


module.exports = route
