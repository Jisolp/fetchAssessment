const express = require('express');
const router = express.Router();

const { processReceipt, getPoints } = require('../controller/receiptsController');

router.post('/process',processReceipt);
router.get('/:id/points',getPoints);

module.exports = router;