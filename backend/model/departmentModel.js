const mongoose=require('mongoose')

const departmentSchema=new mongoose.Schema({
    dept:{type:String},
    deptPic:{type:String},
    description:{type:String},
    totalSeat:{type:Number},
    seatAvail:{type:Number}
});

module.exports=new mongoose.model('Department',departmentSchema);