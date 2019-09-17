require("dotenv").config();
const express = require("express"),
          app = express(),
      request = require("request");

app.set("view engine","ejs");

app.get("/",(req, res)=> {
    res.render("search");
})

app.get("/results",(req,res)=>{
    let query=req.query.searchterm;
    let url=process.env.API_KEY+query;
   request(url,(error,response,body)=>{
       var data=JSON.parse(body);
       res.render("results",{data});
   }); 
});

app.listen(3000)
{
    console.log("Server has started");
}
