const express = require('express');

bodyParser=require("body-parser");
const date=require(__dirname+"/date.js")
const app=express();
app.set('view engine','ejs');

let items=[];
let workItems=[];
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.get("/",function(request,response){
response.render("list",{listTitle:date.getDate(),newListItems:items});
})

app.get("/work",function(req,res){

    res.render("list",{listTitle:"WorkList",newListItems:workItems});

})

app.post("/",function(req,res){

let item=req.body.newItem;

if(req.body.list==="WorkList"){
    workItems.push(item);
    res.redirect("/work");
}
else{    
items.push(item);
res.redirect("/");
}
})

app.listen(2000,function(){
    console.log("Server has started on port 2000");
});