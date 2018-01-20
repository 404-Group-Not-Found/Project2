// this file will be utilized to develop html pages and gather information to be displayed

// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  app.get("/", function(req, res) {
    var data = {
      quote: 'This is first Toast.'
    };
    
    res.render("login", data);
  });

  // loads the swyppa page
  app.get("/swyppa", function(req, res) {
    res.render("swyppa");
  });

  // loads the login page
  // app.get("/login", function(req, res) {
  //   res.render("login");
  // });

  // loads the register page
  app.get("/register", function(req, res) {
    res.render("register");
  });

};
