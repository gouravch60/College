const express = require('express')
const router =express.Router();
const {getAllGallery, createGalleryitem, deleteGallery} =require('../controller/galleryController')
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

router.get('/gallery',getAllGallery)
router.post('/gallery/new',upload.single('image'),createGalleryitem)
router.delete('/gallery/:id',deleteGallery);
module.exports=router

