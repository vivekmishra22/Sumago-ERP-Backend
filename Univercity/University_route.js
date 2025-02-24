const {add, getdata, getbyId, Update, Delete } = require ('../Univercity/University _contaller');

const express = require ('express');

const route = express.Router()

route.post('/addUniversity', add);
route.get('/getdataUniversity', getdata);
route.get('/getbyIdUniversity/:_id', getbyId);
route.put('/UpdateUniversity/:_id', Update);
route.delete('/deleteUniversity/:_id', Delete);
// route.post('/addplans',add)


module.exports = route
