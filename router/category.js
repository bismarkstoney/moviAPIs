const express = require('express');
const { addCategory } = require('../controller/categoryController');
const router = express.Router();

router.route('/').post(addCategory);

module.exports = router;
