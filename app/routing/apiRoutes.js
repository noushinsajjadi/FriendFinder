var path = require('path');
var friendsList = require("../data/friends.js");


module.exports = function(app){


app.post("/api/friends",function(req,res){
var currentuser = req.body;
var CName 	= currentuser.name;
var CImage 	= currentuser.image;
var CScores = currentuser.scores;


var bestFriend = {
			name: "",
			image: "",
			friendDifference: 100
		};

//loop through the friends to get each friends scores
		for(var i = 0; i < [friendsList].length-1; i++){

			//console.log(friendsList[i].name);

			totalDifference = 0;

//loop through that friends score and the users score and calculate the 
// absolute difference between the two and push that to the total difference variable set above

			for(var j = 0; j < 10; j++){

				// We calculate the difference between the scores and sum them into the totalDifference
				totalDifference += Math.abs(parseInt(currentuser.scores[j]) - parseInt(friendsList[i].scores[j]));
					}
				// If the sum of differences is less then the differences of the current "best match"
				if (totalDifference <= bestFriend.friendDifference){

					// Reset the bestMatch to be the new friend. 
					bestFriend.name = friends[i].name;
					bestFriend.image = friends[i].photo;
					bestFriend.friendDifference = totalDifference;
				}
			}
		

		
var totalDifference = 0;

friendsList.push(currentuser);
res.json(bestFriend);

});

// app.get("/api/bestMatch",function(req,res){
//     res.json(bestMatch());
// });

app.get("/api/friends",function(req,res){

res.json(friendsList);
});
}

