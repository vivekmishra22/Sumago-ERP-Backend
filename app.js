const express = require('express');
const cors = require('cors');
const mongoose = require ('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/ERP_System");

const app = express();
const Technology_route = require('./Technology/Technology_route');
const University_route = require('./Univercity/University_route');
const College_route = require('./College/College_route');
const City_route = require('./City/City_route');
app.use(express.json())
app.use(cors());

app.use('/', Technology_route)
app.use('/', University_route)
app.use('/', College_route)
app.use('/',City_route)

app.get(('/'),(req,res) =>
    res.send("database canected ERP system"));

app.listen(8000, () => {
    console.log(`app listening on port 8000`)
})
