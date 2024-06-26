const mongoose=require('mongoose')

const enquirySchema=new mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    phone:{
        type:Number
    },
    course:{
        type:String
    },
    isEnquired:{
        type:Boolean,
        default:false
    }

})

module.exports=new mongoose.model('Enquiry',enquirySchema)