const express = require('express');
const { createFarmerController } = require('../controller/farmer.controller');
const upload = require('../util/upload');
const protect = require('../middleware/authMiddleware')
const router = express.Router();

router.post('/register-farmer', protect, upload.single('file'), createFarmerController)


module.exports = router