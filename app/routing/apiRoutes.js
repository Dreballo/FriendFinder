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
        var newFriend = req.body;

        //logic for compatibility to find best match

        //getting total score from new Friend Array
        var myScore = newFriend.scores.reduce(getSum);

        //empty array to push matched friend
        var bestFriend = [];
        console.log("My total is: " + myScore);

         //loop through friends object an compare
        for(var i = 0; i < friends.length; i++){

            //getting total score from friends
            var compare = friends[i].scores.reduce(getSum);
            //console.log(compare);
            var difference = Math.abs(compare - myScore);
            console.log("the difference is: " + difference);
            if(difference <= 5){
                bestFriend = friends[i];
                console.log("my new best friend is: " + bestFriend.name);

            } else{
                //bestFriend = newFriend
                console.log("You are unmatchable");
            }

        }




        //Pushing new friend to friends API
        friends.push(newFriend);

        res.json(bestFriend);
    })


}

//function to pass through reduce() to add up find value of an array
function getSum (a,b){
    return parseInt(a) + parseInt(b);
};

