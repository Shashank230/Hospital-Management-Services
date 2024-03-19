const mongoose = require('mongoose');

const doctorSchema = mongoose.Schema({
    userId:{
        type:String
    },
    firstName:{
        type:String,
        required:[true, 'First name is required']
    },
    lastName:{
        type:String,
        required:[true,'Last name is required']
    },
    phoneNumber:{
        type:Number,
        required:[true,'PhonNumber is Mandatory and should be unique']
    },
    email:{
        type:String,
        required:[true,'Email is required']
    },
    website:{
        type:String
    },
    address:{
        type:String,
        required:[true,'Address is required']
    },
    specialization:{
        type:String,
        required:[true,'Specialization is required']
    },
    experience:{
        type:String,
        required:[true, 'Experience is required']
    },
    feesPerConsultation:{
        type:Number,
        required:[true, 'Fees is Required']
    },
    status:{
        type:String,
        default:'pending'
    },
    timings:{
        type:Object,
        required:[true, 'Timings is Required']
    }
},
{timestamps:true})

const doctorModel = mongoose.model('doctors',doctorSchema)

module.exports = doctorModel