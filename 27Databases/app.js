var mongoose = require("mongoose");
mongoose.Promise = global.Promise; 
mongoose.connect("mongodb://localhost/contacts", {useMongoClient: true});

var contactSchema = new mongoose.Schema({
    name: String,
    age: Number,
    relationship: String
});

var Contact = mongoose.model("Contact", contactSchema);

/* Old way:
var jack = new Contact({
    name: "Jack",
    age: 24,
    relationship: "Friend"
});

jack.save(function(err, contact){
    if(err){
        console.log("Error: cannot save " + jack.name + " to DB.");
        // It looks like we didn't have enough room on our door either to save Jack from drowning.
    }
    else{
        console.log("Successfully saved " + contact.name + " to DB.")
        console.log("\n " + contact);
    }
});*/

// Better way:
Contact.create({
    name: "Mary",
    age: 29,
    relationship: "Friend"
}, function(err, contact){
    if(err){
        console.log(err);
    }    
    else{
        console.log(contact);
    }
});

Contact.find({}, function(err, contacts){
    if(err){
        console.log("Error encountered");
        console.log(err);
    }
    else{
        console.log("Contacts found:");
        console.log(contacts);
    }
})