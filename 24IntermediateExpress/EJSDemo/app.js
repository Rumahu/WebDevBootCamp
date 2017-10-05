var express = require("express");
var app = express();

app.get("/", function(request, response){
    response.render("home.ejs");
});

app.get("/explore/:destination", function(req, res){
    res.render("destination.ejs", {destination: req.params.destination});
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server initialized");
});