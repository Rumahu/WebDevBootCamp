var express = require("express");
var app = express();

app.get("/", function(request, response){
    response.send("Welcome to the assignment homepage.");
});

app.get("/speak/:animal", function(req, res){
    var animal = req.params.animal.toLowerCase();
    var sounds = {
        pig: "Oink",
        cow: "Moo",
        dog: "Woof"
    }
    if(sounds[animal]){
        res.send("The " + animal + " says '" + sounds[animal] + "'");    
    }
    else{
        res.send("The " + animal + " is silent");
    }
})

app.get("/repeat/:word/:count", function(req, res){
    if(isNaN(req.params.count)){
        res.send("Your input of [" + req.params.count + "] isn't a number!")
    }
    else{
        var word = req.params.word;
        var count = parseInt(req.params.count);
        var output = "";
        
        for(var i = 0; i < count; i++){
            output += word + " ";
        }
        res.send(output);
    }
});

app.get("*", function(req, res){
   res.send("Sorry, the page you entered was not found.");
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server Initialized");
});