// this file will be utilized to develop html pages and gather information to be displayed

// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");
var session = require("express-session");
// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  app.get("/", function(req, res) {
    var ssn = req.session;

    if (!ssn.username) {
      res.redirect("login");
      return
    }

    console.log("Logged in user:", ssn.username);

    res.render("swyppa");
  });

  // loads the swyppa page
  app.get("/list", function(req, res) {
    res.render("list");
  });

  // loads the login page
  app.get("/login", function(req, res) {
    var ssn = req.session;

    if (ssn.username) {
      res.redirect('/');
      return
    }
    
    res.render("login");
  });

  // loads the register page
  app.get("/register", function(req, res) {
    var ssn = req.session;

    if (ssn.username) {
      res.redirect('/');
      return
    }
    
    res.render("register");
  });

};
