const express = require('express');
const router = express.Router();
const homeController = require('../controllers/home_controllers');
const aboutController = require('../controllers/users_controllers');
const usersController = require('../controllers/users_controllers');

router.get('/', homeController.home);
router.get('/about', aboutController.about);
router.get('/profile', usersController.profile);
router.use('/users', require('./users'));

module.exports = router;