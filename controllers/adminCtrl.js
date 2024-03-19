const doctorModel = require('../models/doctorModel');
const userModel = require('../models/userModels')


const getAllUsersController = async(req,res)=>{
    try {
        const users = await userModel.find({})
        res.status(200).send({
            success: true,
            message: 'users data',
            data : users,
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({success:false, message:'error while fetching users',error})
    }
}

const getAllDoctorsController = async(req,res)=>{
    try {
        const doctors = await doctorModel.find({})
        res.status(200).send({success:true, message:'Doctors data', data:doctors})
    } catch (error) {
        console.log(error);
        res.status(500).send({success:false, message:'error while fetching doctors', error})
    }
}

//changeAccountStatusController
const changeAccountStatusController = async(req,res)=>{
    try {
        const {doctorId, status} = req.body;
        const doctor = await doctorModel.findByIdAndUpdate(doctorId,{status})
        const user = await userModel.findOne({_id:doctor.userId})
        const notification = user.notification
        notification.push({
            type:'doctor-account-request-updated',
            message:`your Doctor account request has ${status} updated`,
            onClickPath:'/notification'
        })
        user.isDoctor = status === 'approved' ? true : false
        await user.save()
        res.status(201).send({
            success:true,
            message:'Account status has been updated',data:doctor
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({success:false, message:'error in account status', error})
    }
}

module.exports = {getAllUsersController,getAllDoctorsController,changeAccountStatusController}