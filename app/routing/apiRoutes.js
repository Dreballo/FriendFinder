// ===============================================================================
// LOAD DATA
// We are requiring our data sources for our routes
// These data sources hold an array of information on friends
// ===============================================================================
var friends = require('../data/friends.js');
// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {

    //Tables API route
    app.get("/api/friends", function(req, res) {
        return res.json(friends);
    });


    // Create new Friends- takes in JSON input
    app.post("/api/friends", function(req, res) {
        //logic for compatibility to find best match

        //empty array to push matched friend
        var bestFriend =
            {
                name: "",
                photo: "",
                friendDifference: 1000

            }
        ;

        var userData = req.body;
        var userScores = userData.scores;

        var totalDifference = 0;
         //loop through friends object an compare
        for(var i = 0; i < friends.length; i++){

            totalDifference = 0;

            //inner loop through the scores of each friend
            for (var j = 0; j < friends[i].scores[j];j++){
                //calculating the difference between each score and sum them into totalDifference
                totalDifference +=Math.abs(parseInt(userScores[j]) - parseInt(friends[i].scores[j]));

                //conditional statement to define best friend match
                if(totalDifference <= bestFriend.friendDifference){

                    bestFriend.name = friends[i].name;
                    bestFriend.photo = friends[i].photo;
                    bestFriend.friendDifference = totalDifference;

                }

            }

        }

        //Pushing new friend to friends API
        friends.push(userData);

        res.json(bestFriend);
    });

}

