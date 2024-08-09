const express = require('express');
const { createFarmerController, getAllFarmerController } = require('../controller/farmer.controller');
const upload = require('../util/upload');
const protect = require('../middleware/authMiddleware')
const router = express.Router();

router.post('/register-farmer', protect, upload.single('file'), createFarmerController)
router.get('/get-all', protect, getAllFarmerController)


module.exports = router