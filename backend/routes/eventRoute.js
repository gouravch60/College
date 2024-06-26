const express = require('express');
const { createEvent, getAllEvent, deleteEvent, updateEvent, updateEventPic } = require('../controller/eventController');
const router= express.Router();
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


router.post('/event/new',upload.single('images'),createEvent)
router.get('/event/',getAllEvent)
router.delete('/event/:id',deleteEvent);
router.put('/event/:id',updateEvent);
router.put('/event/imageupdate/:id',upload.single('images'),updateEventPic);

module.exports= router