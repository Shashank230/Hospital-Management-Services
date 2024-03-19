const doctorModels = require('../models/doctorModel')
const appointmentModel = require('../models/appointmentModel')
const getDoctorInfoController = async(req,res)=>{
    try {
        const doctor = await doctorModels.findOne({userId:req.body.userId})
        res.status(200).send({success:true, message:'doctor data received', data:doctor})
    } catch (error) {
        console.log(error);
        res.status(500).send({success:false, message:'Unable to fetch information',error})
    }
}


//update profile

const updateProfileController = async (req, res) => {
    try {
      const doctor = await doctorModels.findOneAndUpdate(
        { userId: req.body.userId },
        req.body
      );
      res.status(201).send({
        success: true,
        message: "Doctor Profile Updated",
        data: doctor,
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        message: "Doctor Profile Update issue",
        error,
      });
    }
  };


const getDoctorByIdController = async(req,res)=>{
    try {
        const doctor = await doctorModels.findOne({_id:req.body.doctorId})
        res.status(200).send({success:true, message:"single doctor data successfully fetched", data:doctor})
    } catch (error) {
        console.log(error);
        res.status(500).send({success:false,message:'unable to fetch single doctors information', error})
    }
}

const doctorAppointmentsController = async(req,res)=>{
    try {
        const doctor = await doctorModels.findOne({ userId: req.body.userId });
    const appointments = await appointmentModel.find({
      doctorId: doctor._id,
    });
    res.status(200).send({
      success: true,
      message: "Doctor Appointments fetch Successfully",
      data: appointments,
    });
    } catch (error) {
        console.log(error);
    res.status(500).send({success: false,error,message: "Error in Doc Appointments",});
  }
}

const updateStatusController = async(req,res)=>{
    try {
        const { appointmentsId, status } = req.body;
    const appointments = await appointmentModel.findByIdAndUpdate(
      appointmentsId,
      { status }
    );
    const user = await userModel.findOne({ _id: appointments.userId });
    const notification = user.notification;
    notification.push({
      type: "status-updated",
      message: `your appointment has been updated ${status}`,
      onCLickPath: "/doctor-appointments",
    });
    await user.save();
    res.status(200).send({
      success: true,
      message: "Appointment Status Updated",
    });
    } catch (error) {
        console.log(error);
    res.status(500).send({success: false,error,message: "Error In Update Status",});
  }
}

module.exports = {getDoctorInfoController,updateProfileController,getDoctorByIdController,doctorAppointmentsController,updateStatusController}
