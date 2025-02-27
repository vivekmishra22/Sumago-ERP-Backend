const express = require('express');
const cors = require('cors');
const mongoose = require ('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/ERP_System");
// mongoose.connect("mongodb+srv://Bhagyashri:55555@cluster1.uupr7.mongodb.net/ERP_System");
const app = express();
const Technology_route = require('./Technology/Technology_route');
const University_route = require('./Univercity/University_route');
const College_route = require('./College/College_route');
const City_route = require('./City/City_route');
const office_route = require('./Office/office_Route');
const education_route = require('./Education/education_Route');
const office_city_route = require('./Office_City/office_City_Route');
const course_Route =require('./Courses/course_Route');
const guestlecturer_Route = require('./Guest_lecturer/guestlecturer_Route');  

app.use(express.json())
app.use(cors());

app.use('/', Technology_route)
app.use('/', University_route)
app.use('/', College_route)
app.use('/',City_route)
app.use('/',office_route);
app.use('/',education_route);
app.use('/',office_city_route);
app.use('/',course_Route)
app.use('/',guestlecturer_Route)

app.get(('/'),(req,res) =>
    res.send("database canected ERP system"));

app.listen(8000, () => {
    console.log(`app listening on port 8000`)
})
