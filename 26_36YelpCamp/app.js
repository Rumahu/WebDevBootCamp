var express = require("express");
var app = express();
var bodyParser = require("body-parser");

var mongoose = require("mongoose");
mongoose.Promise = global.Promise; 
mongoose.connect("mongodb://localhost/yelp_camp", {useMongoClient: true});

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

// Schemas
var campgroundSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String
});
var Campground = mongoose.model("Campground", campgroundSchema);

/*
Campground.create(
    {
        name: "Salmon Creek",
        image: "https://farm9.staticflickr.com/8673/15989950903_8185ed97c3.jpg",
        description: "A camp that overlooks a beautiful creek"
    },
    function(err, campground){
        if(err){
            console.log(err);
        }
        else{
            console.log(campground);
        }
    });*/

/* Keeping array for now for reference to old names and images.
var campgrounds = [
        {name: "Salmon Creek", image: "https://farm9.staticflickr.com/8673/15989950903_8185ed97c3.jpg"},    
        {name: "Waterfall Glenn", image: "https://farm1.staticflickr.com/22/31733208_3190a1e982.jpg"},
        {name: "Sunrise Summet", image: "https://farm9.staticflickr.com/8422/7842069486_c61e4c6025.jpg"}
];*/

app.get("/", function(request, response){
    response.render("landing");
});

app.get("/campgrounds", function(req, res){
    Campground.find({}, function(err, allCampgrounds){
        if(err){
            console.log(err);
        } 
        else{
            res.render("index", {campgrounds:allCampgrounds}); 
        }
    })
});

app.post("/campgrounds", function(req, res){
    var name = req.body.name;
    var image = req.body.image;
    var desc = req.body.description;
    var newCampground = {name: name, image: image, description: desc};
    Campground.create(newCampground, function(err, insertedCampground){
        if(err){
            // TODO: Have user re-enter valid information.
            console.log(err);
        }
        else{
            res.redirect("/campgrounds");
        }
    })
});

app.get("/campgrounds/new", function(req, res){
    res.render("new.ejs");
});


app.get("/campgrounds/:id", function(req, res){
    Campground.findById(req.params.id, function(err, foundCampground){
        if(err){
            console.log(err);
        }
        else{
            res.render("show", {campground: foundCampground});
        }
    })
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server Initialized");
});