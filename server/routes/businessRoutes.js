const express = require('express');
const router = express.Router();
const {
  getBusinessData,
  regenerateHeadline,
} = require('../controllers/businessController');

router.post('/business-data', getBusinessData);
router.get('/regenerate-headline', regenerateHeadline);

module.exports = router;
