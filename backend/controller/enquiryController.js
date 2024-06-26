const catchAsyncErrors = require('../middleware/catchAsyncErrors')
const Enquiry= require('../model/enquiryModel')

exports.createEnquiry=catchAsyncErrors(async (req,res)=>{
    const enquiry = await Enquiry.create(req.body);

    res.status(200).json({
        success:true,
        enquiry
    })
});

exports.getAllEnquiry=catchAsyncErrors(async (req,res)=>{

    let queryStr={...req.query};
    let enquiries;
    if(req.query.limit){
        let removeFields=['limit','skip'];
        removeFields.forEach((key)=>(delete queryStr[key]))
        let skip=req.query.skip||0;
        enquiries=await Enquiry.find(queryStr).skip(skip).limit(req.query.limit);
    }else{
        enquiries=await Enquiry.find(queryStr);
    }
    res.status(200).send({
        success:true,
        enquiries
    });
});

exports.updateEnquiry=catchAsyncErrors(async (req,res,next)=>{
    let enquiry= await Enquiry.findById(req.params.id);
    if(!enquiry){
        return next(new ErrorHandler("Enquiry not found",404))
    }
    enquiry= await Enquiry.findByIdAndUpdate(req.params.id,req.body);

    res.status(200).send({
        success:true,
        enquiry
    });
} )

exports.enquiryCount=catchAsyncErrors(async (req,res,next)=>{
    let enquiryCount= await Enquiry.aggregate([
        {
          $group: {
            _id: "$course",
            count: { $sum: 1 }
          }
        }
      ])

    enquiryCount=enquiryCount.map(item=>({name:item._id,value:item.count}))
    res.status(200).json({
        success:true,
        enquiryCount
    })
})