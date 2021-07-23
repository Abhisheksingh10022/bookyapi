require("dotenv").config();
const express=require("express");
const mongoose=require("mongoose");
//initialization
const booky=express();
const database=require("./database");
booky.use(express.json());
mongoose.connect(process.env.MONGO_URL,
{
    useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
}
)
.then(()=>console.log("connection established!!!"));
/*booky.get("/",(req,res)=>{
    const books=database.books;
    return res.json({books:books});
});*/
booky.get("/b:isbn",(req,res)=>{
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
booky.get("/c/:category",(req,res)=>{
 const arr=[{}];
 database.books.forEach((book)=>{
     if(book.category.includes(req.params.category))
     {
arr.push(book);
     }
 })
 return res.json({book:arr});
    });
    //add new book in book database
    //get a book from req.body and post it to book database using post http method
booky.post("/book/add",(req,res)=>{
const {newbook}=req.body;
database.books.push(newbook);

return res.json({books:database.books})

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
    booky.get("/",(req,res)=>{
        res.json({books:database.books,authors:database.authors,publication:database.publications});
        return;
   });
    


booky.listen(3000,()=>{console.log("Hey server is running")});
//talk to mongodb  in which mongodb in which mongodb unerstand=> ****
//talk to us in the way we understand=>javascript
//mongoose(we required)