var express = require("express");
var bodyParser = require("body-parser");

var PORT = process.env.PORT || 3000;

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.text());

app.use(bodyParser.json());


// Set Handlebars.
var exphbs = require("express-handlebars");
// Set default/homepage layout template
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Requiring our models for syncing
var db = require("./models");

// Import routes and give the server access to them.
//
require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app)

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
/*db.sequelize.sync({ force: true }).then(function() {
    app.listen(PORT, function() {
      console.log("App listening on PORT " + PORT);
    });
  });*/
