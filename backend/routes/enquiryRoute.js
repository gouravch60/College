const express = require('express');
const { createEnquiry, getAllEnquiry, updateEnquiry, enquiryCount } = require('../controller/enquiryController');
const router=express.Router();

router.post('/enquiry/new',createEnquiry)
router.get('/enquiry',getAllEnquiry)
router.put('/enquiry/:id',updateEnquiry);
router.get('/enquiry/enquiryCount',enquiryCount);

module.exports=router
