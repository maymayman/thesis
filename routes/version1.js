const express = require('express');
const router = express.Router();

router.use('/users', require('./version1/users'));
router.use('/categories', require('./version1/categories'));
router.use('/projects', require('./version1/projects'));
router.use('/countries', require('./version1/countries'));

module.exports = router;
