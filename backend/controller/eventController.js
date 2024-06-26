const catchAsyncErrors = require('../middleware/catchAsyncErrors')
const Event = require('../model/eventModel')

//create event
exports.createEvent=catchAsyncErrors(async (req,res)=>{
    let images="/image/"+req.file.filename;
    let newEvent = { 
         'title'            :req.body.title
        ,'description'      :req.body.description
        ,'images'           :images
        ,'regLink'          :req.body.regLink
        ,'eventDate'        :req.body.eventDate
        ,'eventStartTime'   :req.body.eventStartTime
        ,'eventendTime'     :req.body.eventendTime 
    };

    const event=await Event.create(newEvent)
    
    res.status(200).json({
        success:true,
        event
    })
})

//get all event
exports.getAllEvent=catchAsyncErrors(async (req,res)=>{
    let queryStr={...req.query};
    let events;
    if(req.query.limit){
        let removeFields=['limit','skip'];
        removeFields.forEach((key)=>(delete queryStr[key]))
        let skip=req.query.skip||0;
        events=await Event.find(queryStr).skip(skip).limit(req.query.limit);
    }else{
        events=await Event.find(queryStr);
    }
    res.status(200).send({
        success:true,
        events
    });
})

exports.deleteEvent=catchAsyncErrors(async (req,res,next)=>{
    let event= await Event.findById(req.params.id);
    if(!event){
        return next(new ErrorHandler("Event not found",404))
    }
    await Event.deleteOne({_id:req.params.id});
    res.status(200).send({
        success:true,
        event
    });
})

//update course
exports.updateEvent=catchAsyncErrors(async (req,res,next)=>{
    let event= await Event.findById(req.params.id);
    if(!event){
        return next(new ErrorHandler("Event not found",404))
    }
    event= await Event.findByIdAndUpdate(req.params.id,req.body);

    res.status(200).send({
        success:true,
        event
    });
} )

//update course pic
exports.updateEventPic=catchAsyncErrors(async (req,res,next)=>{
    let event= await Event.findById(req.params.id);
    let images="/image/"+req.file.filename;
    let updateData={'images':images}
    if(!event){
        return next(new ErrorHandler("Event not found",404))
    }
    event= await Event.findByIdAndUpdate(req.params.id,updateData);

    res.status(200).send({
        success:true,
        newImage:images
    });
} )