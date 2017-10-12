var express = require("express");
var app = express();
var request = require("request");
require('dotenv').config();

app.set("view engine", "ejs");

app.get("/", function(request, response){
   response.render("search");
});

app.get("/results", function(req, res){
    var query = req.query.search;
    console.log(query);
    var url = "http://omdbapi.com/?s=" + query;
    var key = "&apikey=" + process.env.accessKey;
    
    request(url + key, function(error, response, body){
        if(!error && response.statusCode == 200){
            var parsedData = JSON.parse(body);
            res.render("results", {data: parsedData});
        }
    });
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server Initialized");
})