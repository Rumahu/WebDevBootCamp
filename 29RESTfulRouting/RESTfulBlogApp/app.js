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

app.get("/blogs/new", function(req, res){
    res.render("new");
});

app.post("/blogs", function(req, res){
    blog.create(req.body.blog, function(err, newBlog){
        if(err){
            console.log(err);
            res.render("new");
        }
        else{
            res.redirect("/blogs");
        }
    })
});

app.get("/blogs/:id", function(req, res){
   blog.findById(req.params.id, function(err, foundBlog){
      if(err){
          console.log(err);
          res.redirect("/blogs");
      } 
      else{
          res.render("show", {blog: foundBlog});
      }
   });
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server Initialized");
});