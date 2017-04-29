var path = require('path');
var friendsList = require("../data/friends.js");
var allFriends = [];


module.exports = function(app){


app.post("/api/friends",function(req,res){
var friend = req.body;
allFriends.push(friend);
res.json(allFriends);

});

// app.get("/api/bestMatch",function(req,res){
//     res.json(bestMatch());
// });

app.get("/api/friends",function(req,res){
res.json(allFriends);
});
}

