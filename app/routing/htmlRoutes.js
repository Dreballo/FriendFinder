// ===============================================================================
// LOAD DATA
// We are requiring our data source for our routes
// This data source holds an array of information on friends
// ===============================================================================
var friends = require('../data/friends.js');
var path = require('path');

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {

    // Basic route that sends the user first to the AJAX Page
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });

    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

};