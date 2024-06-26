const catchAsyncErrors = require('../middleware/catchAsyncErrors')
const Gallery=require('../model/galleryModel')
// const limitAndSkip=require('../utils/LimitAndSkip')
// const ApiFeatures = require("../utils/apifeatures");

exports.getAllGallery = catchAsyncErrors(async (req,res)=>{
    // let gallery=await Gallery.find().limit(req.query.limit);
    // let apifeatures=new ApiFeatures(Gallery.find(),req.query);
    // apifeatures.pagination();
    let gallery;
    if(req.query.limit){
        let skip=req.query.skip||0;
        gallery=await Gallery.find().skip(skip).limit(req.query.limit);
    }else{
        gallery=await Gallery.find();
    }

    

    res.status(200).json({success:true,gallery})
})


exports.createGalleryitem = catchAsyncErrors(async (req,res)=>{
    let image="/image/"+req.file.filename;
    let newGalleryItem = { 
         'title'            :req.body.title
        ,'image'           :image
    };

    let galleryItem= await Gallery.create(newGalleryItem);
    res.status(200).json({success:true,galleryItem})
})

exports.deleteGallery=catchAsyncErrors(async (req,res,next)=>{
    let gallery= await Gallery.findById(req.params.id);
    if(!gallery){
        return next(new ErrorHandler("Gallery Item Not Found",404))
    }
    await Gallery.deleteOne({_id:req.params.id});
    res.status(200).send({
        success:true,
        gallery
    });
})