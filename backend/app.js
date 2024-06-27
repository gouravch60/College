require('dotenv').config()
const http = require('http')
const path=require('path');
const express=require('express')
const cors=require('cors')
const app=express()
const cookieParser = require('cookie-parser');
app.use(cookieParser()); //cookie-parser
const { urlencoded } = require("express");
const ErrorMiddleware = require('./middleware/error');

const port = process.env.PORT || 4000;

require('./config/dbconnection')

app.use(cors({
    credentials: true
    ,origin:'https://college-9yaq.onrender.com'
}));

const departmentRoute=require('./routes/departmentRoute')
const eventRoute=require('./routes/eventRoute')
const galleryRoute=require('./routes/galleryRoute')
const enquiryRoute=require('./routes/enquiryRoute')
const feedbackRoute=require('./routes/feedbackRoute')
const userRoute=require('./routes/userRoute');
const { loginUser, dashboardCounts } = require('./controller/userController');
const {adminAuth} = require('./middleware/adminAuth');

const staticPath=path.join(__dirname,'public')

app.use(express.static(staticPath));

app.use(express.json())  //to deal with JSON

app.use(urlencoded({extended:true}));  //to use body
app.get('/',(req,res)=>{
    res.send('Welcome');
})

app.post('/api/v1/login',loginUser)
app.get('/api/v1/dashboardCount',dashboardCounts)
app.use('/api/v1',departmentRoute)
app.use('/api/v1',eventRoute)
app.use('/api/v1',galleryRoute)
app.use('/api/v1',enquiryRoute)
app.use('/api/v1',feedbackRoute)
app.use('/api/v1',userRoute)
app.use(ErrorMiddleware)


app.listen(port,()=>{
    console.log('Server is listening at port 4000');
});
