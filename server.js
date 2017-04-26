/* PseudoCode for Server.js

initialize node packages (express, body-parser, and path);
 */

var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

//Telling node that we are creating a server
var app = express();

//Setting a variable to for initial ports
var PORT = process.env.PORT || 3000;

//Body parser to create and read JSON data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:"application/vnd.api+json"}));

// ================================================================================
// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
// ================================================================================

// require api routes, pass the app object to the module
// run the module's function to set our app routes
require("./app/routing/apiRoutes")(app);

//add require for html routes
require("./app/routing/htmlRoutes")(app);
// ==============================================================================
// LISTENER
// The below code effectively "starts" our server
// ==============================================================================

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});


