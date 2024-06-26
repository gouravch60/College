const express = require('express');
const { createDepartment,getAllDept, updateDepartment, deleteDepartment, updateDeptImage } = require('../controller/departmentController');
const router=express.Router();
const path=require('path');
const multer= require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname,'../public/image/'))
    },
    filename: function (req, file, cb) {
      const uniquePrefix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null,uniquePrefix+'_'+ file.originalname)
    }
  })
  
const upload  = multer({storage:storage});
  

router.post('/department/new',upload.single('deptPic'),createDepartment);
router.get('/department',getAllDept);
router.put('/department/:id',updateDepartment);
router.delete('/department/:id',deleteDepartment);
router.put('/department/imageupdate/:id',upload.single('deptPic'),updateDeptImage);

module.exports= router;