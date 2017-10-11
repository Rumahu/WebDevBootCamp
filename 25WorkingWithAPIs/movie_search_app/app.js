var express = require("express");
var app = express();
var request = require("request");
require('dotenv').config();

app.get("/", function(request, response){
   response.send("Home") ;
});

app.get("/results", function(req, res){
    request("http://omdbapi.com/?s=star&apikey="+process.env.accessKey, function(error, response, body){
        if(!error && response.statusCode == 200){
            var parsedData = JSON.parse(body);
            res.send(parsedData);
        }
    });
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server Initialized");
})