const express = require('express')
const { loginController, registerController, authController,applyDoctorController,
    getAllNotificationController, deleteAllNotificationController,
    getAllDoctorsController,bookAppointmentController,bookAvailabilityController,
    userAppointmentListController

} = require('../controllers/userCtrl')
const authMiddleware = require('../middlewares/authMiddleware')

//router object
const router = express.Router()

//routes
//LOGIN || POST

router.post('/login', loginController)

//REGISTER CONTROLLER || POST

router.post('/register', registerController)

//Auth ||POST
router.post('/getUserData', authMiddleware, authController)

//ApplyDoctor ||POST
router.post('/apply-doctor', authMiddleware, applyDoctorController)

//NOTIFICATION ||POST
router.post('/get-all-notification', authMiddleware, getAllNotificationController)


//NOTIFICATION ||POST
router.post('/delete-all-notification', authMiddleware, deleteAllNotificationController)


//Get All Doctor || GET
router.get('/getAllDoctors', authMiddleware, getAllDoctorsController)

//BOOK APPOINTMENT
router.post('/book-appointment',authMiddleware, bookAppointmentController)

//Check booking availability
router.post('/booking-availability', authMiddleware, bookAvailabilityController)


//Appointment List
router.get('/user-appointments', authMiddleware, userAppointmentListController)


module.exports = router