const express = require('express');

bodyParser=require("body-parser");

const app=express();

app.set('view engine','ejs');

var items=[];
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.get("/",function(request,response){
    
var today=new Date();

var options={
    weekday:"long",
    day:"numeric",
    month:"long"
};
var day=today.toLocaleDateString("en-US",options);
response.render("list",{kindOfDay:day,newListItems:items});
})

app.post("/",function(req,res){

var item=req.body.newItem;
items.push(item);
res.redirect("/");

})

app.listen(2000,function(){
    console.log("Server has started on port 2000");
});