

// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");


// make an object from routh
// =============================================================
var htmlRoutes = require("./routing/htmlRoutes.js");
var apiRoutes = require("./routing/apiRoutes.js");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.text());
app.use(bodyParser.json({
    type: "application/vnd.api+json"
}));



htmlRoutes(app);
apiRoutes(app);



app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});