const mongoose= require('mongoose')

const eventSchema = new  mongoose.Schema({
    title:{
        require:true,
        type:String
    },
    description:{
        require:true,
        type:String
    },
    images:{
        type:String
    },
    regLinkFlag:{
        type:String,
        default:'N'
    },
    regLink:{
        type:String
    },
    eventDate:{
        type:Date
    },
    eventStartTime:{
        type:String
    },
    eventendTime:{
        type:String
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
});

module.exports=new mongoose.model('Event',eventSchema);