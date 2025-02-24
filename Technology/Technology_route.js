const {add, getdata, getbyIdtechnology, UpdateTechnology, deleteTechnology} = require ('../Technology/Technology_contaller');

const express = require ('express');

const route = express.Router()

route.post('/technologypost', add);
route.get('/getdata', getdata);
route.get('/getbyIdtechnology/:_id', getbyIdtechnology);
route.put('/UpdateTechnology/:_id', UpdateTechnology);
route.delete('/deleteTechnology/:_id', deleteTechnology);
// route.post('/addplans',add)


module.exports = route
