const books=[{
 ISBN:"12345book",
    tittle:"Getting started with MERN",
    pubDate:"2021-01-01",
    language:"en",
    numPages:250,
    author:[1,2],
    publications:1,
    category: ["tech","programming","education"]
},
{
    ISBN:"2345book",
    tittle:"lodu",
     pubDate:"2012-02-03",
     language:"hindi",
     numPages:320,
     author:[1],
     publications:2,
     category:["abhi"]
}
];

const authors=[{
    id:1,
    Name:"abhi",
    books:["12345Book"],
},
{
    id:2,
    Name:"elon",
    books:["12345book"],
}];

const publications=[{
  id:1,
  name:"writex",
  books:[],
},
{
    id:2,
    name:"writey",
    books:["2345book"],
}];

module.exports={books,authors,publications};