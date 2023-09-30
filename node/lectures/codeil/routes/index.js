const express = require('express');
const router = express.Router();
const homeController = require('../controllers/home_controllers');
const aboutController = require('../controllers/users_controllers');
const usersController = require('../controllers/users_controllers');

router.get('/', homeController.home);
router.get('/about', aboutController.about);
router.get('/profile', usersController.profile);
router.use('/users', require('./users'));

<<<<<<< HEAD


module.exports = router;    
=======
module.exports = router;
>>>>>>> e6908e58e88039ab6bc0c142bf8f49c654525c5d
