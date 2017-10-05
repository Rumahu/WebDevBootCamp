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

// uses process.env.PORT since server is actually running on cloud 9 servers
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server initialized");
});