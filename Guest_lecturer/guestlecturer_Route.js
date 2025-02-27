const {add, getdata, getbyId, Update, Delete } = require ('./guestlecturer_Controller');

const express = require ('express');

const route = express.Router()

route.post('/addguest', add);
route.get('/getguestdata', getdata);
route.get('/getguestbyId/:_id', getbyId);
route.put('/Updateguest/:_id', Update);
route.delete('/deleteguest/:_id', Delete);

module.exports = route