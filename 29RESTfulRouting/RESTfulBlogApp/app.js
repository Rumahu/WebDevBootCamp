var express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose");
    
    
mongoose.Promise = global.Promise; 
mongoose.connect("mongodb://localhost/restfulBlogApp", {useMongoClient: true});

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

var blogSchema = new mongoose.Schema({
    title: String,
    image: String,
    body: String,
    created: {type: Date, default: Date.now}
});
var blog = mongoose.model("Blog", blogSchema);

app.get("/", function(request, response){
    response.redirect("/blogs");
});

app.get("/blogs", function(req, res){
    blog.find({}, function(err, blogs){
       if(err){
           console.log(err);
       } 
       else{
           res.render("index", {blogs: blogs});
       }
    });
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server Initialized");
});