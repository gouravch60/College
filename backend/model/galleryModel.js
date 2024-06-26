const mongoose = require('mongoose')

const gallerySchema=new mongoose.Schema({
    image:{
        type:String
    },
    title:{
        type:String
    }
});

module.exports=new mongoose.model('Gallery',gallerySchema)