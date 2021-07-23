const mongoose=require("mongoose");
//creating a book schema
const bookSchema=mongoose.Schema({
    
        ISBN:String,
           tittle:String,
           pubDate:String,
           language:String,
           numPages:Number,
           author:[Number],
           publications:Number,
           category:[String]
    });

//create a modal
const bookModel=mongoose.model("books",bookSchema);

module.exports=bookModel;