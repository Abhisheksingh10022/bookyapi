const mongoose=require("mongoose");
//creating schema
const publicationSchema=mongoose.Schema({
    
        id:Number,
        Name:String,
        books:[String],
    
});
//creating model
const publicationModel=mongoose.model({publicationSchema});

module.exports=publication;