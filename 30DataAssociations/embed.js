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
    posts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Post"
        }
    ]
});

var User = mongoose.model("User", userSchema);

// OLD WAY. No relation:

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

/*
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
*/

// NEW WAY. Relation:

/*
User.create({
    email: "telgin@hawk.iit.edu",
    name: "Toby Elgin"
});
*/

/*
Post.create({
    title: "Post Test",
    content: "I'm hungry and just want to get these tests done"
}, function(err, post){ // No err handling. It's a lesson!
    User.findOne({email: "telgin@hawk.iit.edu"}, function(err, foundUser){
        if(err){
            console.log(err);
        }
        else{
            foundUser.posts.push(post);
            foundUser.save(function(err, data){
                if(err){
                    console.log(err);
                }
                else{
                    console.log(data);
                }
            });
        }
    }); 
});
*/

User.findOne({email: "telgin@hawk.iit.edu"}).populate("posts").exec(function(err, user){
    if(err){
        console.log(err);
    }    
    else{
        console.log(user);
    }
});