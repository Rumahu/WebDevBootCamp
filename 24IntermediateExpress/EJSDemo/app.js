var express = require("express");
var app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function(request, response){
    response.render("home");
});

app.get("/explore/:destination", function(req, res){
    res.render("destination", {destination: req.params.destination});
});

app.get("/visited", function(req, res){
    var placesVisited = [
        {name: "Machu Picchu", location: "Peru"},
        {name: "Grand Canyon", location: "Arizona"},
        {name: "Aurora Borealis", location: "Alaska"}
    ];
    
    res.render("visited", {placesVisited: placesVisited});
});


app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server initialized");
});