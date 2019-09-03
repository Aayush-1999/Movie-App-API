var express=require("express");
var app=express();
var request=require("request");
require("dotenv").config();
app.set("view engine","ejs");

app.get("/",function(req, res) {
    res.render("search");
})

app.get("/results",function(req,res){
    var query=req.query.searchterm;
    var url=process.env.API_KEY+query;
   request(url,function(error,response,body){
       var data=JSON.parse(body);
       res.render("results",{data:data});
   }); 
});

app.listen(3000)
{
    console.log("Server has started");
}