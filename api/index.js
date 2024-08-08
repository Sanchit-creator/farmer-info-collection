const express = require('express');
const router = express.Router();

router.use('/user', require('./user'));
router.use('/farmer', require('./farmer'));

module.exports = router;