const User =require('../model/userModel')
const Department = require('../model/departmentModel')
const Event = require('../model/eventModel')
const Enquiry= require('../model/enquiryModel')
const Feedback = require('../model/feedbackModel')
const catchAsyncErrors = require('../middleware/catchAsyncErrors')
const ErrorHandler = require("../utils/ErrorHandler");
const jwt = require("jsonwebtoken")
const bcrypt=require('bcrypt')

exports.createUser= catchAsyncErrors(async (req,res)=>{
    let userInfo={name:'Gourav Choubey',password:'admin',email:'gourav@mail.com',role:'admin'}
    let user = await User.create(userInfo);

    res.status(200).json({
        success:true,
        user
    })
})

exports.loginUser =catchAsyncErrors(async (req,res,next)=>{
    let user = await User.findOne({email:req.body.email});
    if(!user){
        return next(new ErrorHandler('Invalid email or password'))
    }
    let isPwdMatched = await bcrypt.compare(req.body.password,user.password)

    if(!isPwdMatched){
        return next(new ErrorHandler('Invalid email or password'))
    }

    // options for cookie
    const expirationDate = new Date(
        Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000
      );

    const options = {
        httpOnly: true
    };

    let token = jwt.sign({name:user.name,role:user.role,email:user.email},process.env.ACCESS_TOKEN_KEY)
    res.status(200).cookie("token",token,options).json({
        success:true,
        user:user
    })
})

exports.loadUser=catchAsyncErrors(async (req,res,next)=>{
    let user = await User.findOne({email:req.email});
    if(!user){
        return next(new ErrorHandler('Authorization Failed',401))
    }
    res.status(200).json({
        success:true,
        user
    })
})


// admin controllers

exports.dashboardCounts=catchAsyncErrors(async (req,res,next)=>{
    var courseCount=await Department.countDocuments({});
    let eventCount=await Event.countDocuments({});
    let enquiryCount=await Enquiry.countDocuments({});
    let feedbackCount=await Feedback.countDocuments({});

    let counts ={
        courseCount,
        eventCount,
        enquiryCount,
        feedbackCount
    }
    res.status(200).json({
        success:true,
        counts
    })
})

exports.logout=catchAsyncErrors(async (req,res,next)=>{
    
    res.status(200).clearCookie('token').json({
        success:true
    })
})


