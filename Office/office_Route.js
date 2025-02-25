const { add, getdata, getbyId, Update, Delete } = require('../Office/office_Controller');

const express = require('express');

const route = express.Router()

route.post('/addOffice', add);
route.get('/getdataOffice', getdata);
route.get('/getbyIdOffice/:_id', getbyId);
route.put('/UpdateOffice/:_id', Update);
route.delete('/deleteOffice/:_id', Delete);

module.exports = route
