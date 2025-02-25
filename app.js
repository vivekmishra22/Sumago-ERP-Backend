const express = require('express');
const cors = require('cors');
const mongoose = require ('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/ERP_System");

const app = express();
const technology_Route = require('./Technology/technology_Route');
const university_Route = require('./Univercity/university_Route');
const college_Route = require('./College/college_Route');
const city_Route = require('./City/city_Route');
app.use(express.json())
app.use(cors());

app.use('/', technology_Route)
app.use('/', university_Route)
app.use('/', college_Route)
app.use('/', city_Route)

app.get(('/'),(req,res) =>
    res.send("database canected ERP system"));

app.listen(8000, () => {
    console.log(`app listening on port 8000`)
})
