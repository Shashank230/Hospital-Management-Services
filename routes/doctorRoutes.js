const express = require('express')
const router = express.Router()
const authMiddleware = require('../middlewares/authMiddleware')
const { getDoctorInfoController,updateProfileController,getDoctorByIdController
,doctorAppointmentsController,updateStatusController } = require('../controllers/doctorCtrl')

//post Single doctor info()
router.post('/getDoctorInfo', authMiddleware, getDoctorInfoController)

//Post update profile
router.post('/updateProfile',authMiddleware, updateProfileController )

//POST GET SINGLE DOC INFO
router.post('/getDoctorById', authMiddleware, getDoctorByIdController)

//GET Appointments
router.get("/doctor-appointments",authMiddleware,doctorAppointmentsController);

  //POST Update Status
  router.post("/update-status", authMiddleware, updateStatusController);

module.exports = router