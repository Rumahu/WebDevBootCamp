var express = require("express");
var app = express();
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine", "ejs");

// Array is used until databases are introduced. MongoDB.
var contacts = ["Toby", "John", "Lea", "Adam"];

app.get("/", function(request, response){
    response.render("home");
});

app.post("/addcontact", function(req, res){
    var newContact = req.body.newcontact;
    contacts.push(newContact);
    res.redirect("/contacts");
});

app.get("/contacts", function(req, res){
    res.render("contacts", {contacts:contacts});
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server Initialized");
})