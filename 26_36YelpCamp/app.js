var express = require("express");
var app = express();

app.set("view engine", "ejs");

app.get("/", function(request, response){
    response.render("landing");
});

app.get("/campgrounds", function(req, res){
    var campgrounds = [
        {name: "Salmon Creek", image: "https://farm9.staticflickr.com/8673/15989950903_8185ed97c3.jpg"},    
        {name: "Waterfall Glenn", image: "https://farm1.staticflickr.com/22/31733208_3190a1e982.jpg"},
        {name: "Sunrise Summet", image: "https://farm9.staticflickr.com/8422/7842069486_c61e4c6025.jpg"}
    ];
    
    res.render("campgrounds", {campgrounds:campgrounds});
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server Initialized");
});