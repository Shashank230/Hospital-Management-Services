const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');
const { getAllUsersController, getAllDoctorsController,
    changeAccountStatusController,
    
} = require('../controllers/adminCtrl');


//Get Method || users

router.get('/getAllUsers', authMiddleware,getAllUsersController)

//Get Method || doctors

router.get('/getAllDoctors', authMiddleware , getAllDoctorsController)

//POST METHOD || CHANGE ACCOUNT STATUS
router.post('/changeAccountStatus', authMiddleware, changeAccountStatusController)


module.exports = router