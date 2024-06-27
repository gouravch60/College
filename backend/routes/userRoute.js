const express = require('express');
const { createUser, loginUser, loadUser, dashboardCounts, enquiryCount, logout } = require('../controller/userController');
const router=express.Router();

router.post('/user',createUser)
router.get('/user/loadUser',loadUser);
router.get('/user/logout',logout);



module.exports=router