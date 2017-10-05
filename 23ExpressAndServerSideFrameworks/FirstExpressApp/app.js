var express = require("express");
var app = express();

app.get("/", function(request, response){
    console.log("Received a request to the home page");
    response.send("Home GET request received!");
});

app.get("/get", function(req, res){
    console.log("Received a request to the /get page");
   res.send("Get page GET request received!");
});

// Route Pattern Demo with reddit examples
app.get("/r/:subredditName", function(req, res){
   var subreddit = req.params.subredditName;
   res.send("Welcome to the " + subreddit + " subreddit!"); 
});

app.get("/r/:subredditName/comments/:id/:title/", function(req, res){
    var title = req.params.title;
    var subreddit = req.params.subredditName;
    res.send("Welcome to the " + title + " post's comments page in the " + subreddit + " subreddit!");
});

app.get("*", function(req, res){
   res.send("Received a GET request for an undefined page!");
});

// uses process.env.PORT since server is actually running on cloud 9 servers
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server initialized");
});