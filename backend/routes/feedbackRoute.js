const express = require('express');
const { createFeedback, getAllFeedback, getFeedbackDatewise } = require('../controller/feedbackController');
const router = express.Router();

router.post('/feedback',createFeedback)
router.get('/feedback',getAllFeedback);
router.get('/feedback/datewiseCount',getFeedbackDatewise)
module.exports=router
