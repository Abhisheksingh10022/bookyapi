require("dotenv").config();
const express=require("express");
const mongoose=require("mongoose");
//initialization

const booky=express();
const database=require("./database");
//models for book


//models for authors

// models for publications



booky.use(express.json());
/*establish connection with mongoose*/
mongoose.connect(process.env.MONGO_URL,
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}
).then(()=>{
    console.log("connection established");
})
  
booky.get("/is/:isbn",async (req,res)=>{
   const getspecificbook= await bookmodels.findOne({ISBN:req.params.isbn});

   if(!getspecificbook)
   {
       return res.json("error");
   }
   return res.json({book:getspecificbook});
});
booky.get("/b/:isbn",(req,res)=>{
    const arr=[];
    database.books.forEach(
        (book)=>  arr.push(book.category)
         );
    if(filtered.length==0)
    {
       return res.json({book:"NO book found with isbn"})
    }
    return res.json({
        book:filtered
    })
});
booky.get("/c/:category",async (req,res)=>{
const getbookbycategory=await bookmodels.findOne({category:req.params.category});
if(!getbookbycategory)
{
    return res.json("error");
}
return re.json({book:getbookbycategory});

    });
    //add new book in book database
    //get a book from req.body and post it to book database using post http method
booky.post("/book/add",(req,res)=>{
const {newbook}=req.body;

const addnewbook=bookmodels.create(newbook);
return res.json({book:addnewbook,message:"book was added"});

})
booky.post("/author/add",(req,res)=>{
const {newauthor}=req.body;
database.authors.push(newauthor);
return res.json({authors:database.authors});
});
/*update/add new book in publication*/
booky.put("/update/publication/:isbn",(req,res)=>{
    database.publications.forEach((publication)=>{
        if(publication.id===req.body.pubID)
        {
            publication.books.push(req.params.isbn);
            return;
        }
    });
    database.books.forEach((book)=>{
        if(book.ISBN===req.params.isbn)
        {
            book.publications=req.body.pubID;
            return;
        }
    });
    return res.json({book:database.books,
        publications:database.publications});
});
booky.delete("/del/book/:id/:isbn",(req,res)=>{
    database.publications.forEach((publication)=>{
        if(publication.id===parseInt(req.params.id))
        {
            const newbookarr=publication.books.filter((book)=>{
           book.ISBN!==req.params.isbn;
            });
            publication.books=newbookarr;
            return ;
        }
    });
        database.books.forEach((book)=>{
        if(book.ISBN==req.params.isbn)
        {
            book.publications=0;
            return ;
        }
        });
    });
    booky.get("/",async (req,res)=>{
         const getallbooks= await bookmodels.find();
        res.json({books:getallbooks});
        return;
   });
    


booky.listen(3000,()=>{console.log("Hey server is running")});
//talk to mongodb  in which 
//  mongodb unerstand=> ****
//talk to us in the way we understand=>javascript
//mongoose(we required)