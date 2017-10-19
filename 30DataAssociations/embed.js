var mongoose = require("mongoose");

mongoose.Promise = global.Promise; 
mongoose.connect("mongodb://localhost/blog_demo", {useMongoClient: true});

var postSchema = new mongoose.Schema({
    title: String,
    content: String
});

var Post = mongoose.model("Post", postSchema);

var userSchema = new mongoose.Schema({
    email: String,
    name: String,
    posts: [postSchema]
});

var User = mongoose.model("User", userSchema);

/*
var newUser = new User({
    email: "telgin@hawk.iit.edu",
    name: "Toby Elgin"
});

newUser.posts.push({
    title: "Lesson Plan",
    content: "Work everyday. Don't forget to breath."
});

newUser.save(function(err, user){
    if(err){
        console.log(err);
    }
    else{
        console.log(user);
    }
})
*/

User.findOne({name: "Toby Elgin"}, function(err, user){
    if(err){
        // console.log(err);
    }
    else{
        user.posts.push({
            title: "Lunch Meal Plan",
            content: "Gigantic family-sized lasagna"
        });
        user.save(function(err, updatedUser){
            if(err){
                console.log(err);
            }
            else{
                console.log(updatedUser);
            }
        });
    }
});