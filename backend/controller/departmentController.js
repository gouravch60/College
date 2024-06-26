const express=require('express')
const mongoose=require('mongoose')
const Department=require('../model/departmentModel')
const catchAsyncErrors = require('../middleware/catchAsyncErrors')
const ErrorHandler = require('../utils/ErrorHandler')

//Create course
exports.createDepartment=catchAsyncErrors(async (req,res)=>{
    let deptPic="/image/"+req.file.filename;
    let department = { 
         'dept'         :req.body.dept
        ,'deptPic'      :deptPic
        ,'description'  :req.body.description
        ,'totalSeat'    :req.body.totalSeat
        ,'seatAvail'    :req.body.seatAvail 
    }

    await Department.create(department)

    res.status(200).send(department);
} )

//get all course
exports.getAllDept=catchAsyncErrors(async (req,res)=>{
    let departments;
    if(req.query.limit){
        let skip=req.query.skip||0;
        departments=await Department.find().skip(skip).limit(req.query.limit);
    }else{
        departments=await Department.find();
    }

    res.status(200).send({
        success:true,
        departments
    });
})

//update course
exports.updateDepartment=catchAsyncErrors(async (req,res,next)=>{
    let department= await Department.findById(req.params.id);
    if(!department){
        return next(new ErrorHandler("Department not found",404))
    }
    department= await Department.findByIdAndUpdate(req.params.id,req.body);

    res.status(200).send({
        success:true,
        department
    });
} )

exports.deleteDepartment=catchAsyncErrors(async (req,res,next)=>{
    let department= await Department.findById(req.params.id);
    if(!department){
        return next(new ErrorHandler("Department not found",404))
    }
    await Department.deleteOne({_id:req.params.id});
    res.status(200).send({
        success:true,
        department
    });
})

exports.updateDeptImage=catchAsyncErrors(async (req,res,next)=>{
    let department= await Department.findById(req.params.id);
    let deptPic="/image/"+req.file.filename;
    let updateData={'deptPic':deptPic}
    if(!department){
        return next(new ErrorHandler("Department not found",404))
    }
    department= await Department.findByIdAndUpdate(req.params.id,updateData);

    res.status(200).send({
        success:true,
        newDeptPic:deptPic
    });
} )



