const mongoose=require("mongoose");
//creating schema
const authorSchema=mongoose.Schema({
    
        id:Number,
        Name:String,
        books:[String],
    
});
//creating model
const authorModel=mongoose.model("author",authorSchema);

module.exports=authorModel;