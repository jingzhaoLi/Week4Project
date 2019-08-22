let express=require('express');

let app=express(); //new instance 
app.get("/",function(req,res){
    res.send("Hello to my first express app!!");
})

app.get("/wiki/:keyword",function(req,res){  // : means parameter keyword
    console.log(req.url);
    console.log(req.params); //print a object
    // keyword is the key , value is /value
    
})
app.get("/report",function(req,res){
    console.log(req.url);

    console.log(req.query);
    res.send("This is the report page;")
})
app.listen(8080);

//git init
//git ignore
//init commit 