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
    res.render("index", data);
  });

  // cms route loads cms.html
  app.get("/toast", function(req, res) {
    res.render("swyppa");
  });

  // blog route loads blog.html
  app.get("/login", function(req, res) {
    res.render("login");
  });

  // authors route loads author-manager.html
  app.get("/authors", function(req, res) {
    // res.sendFile(path.join(__dirname, "../public/author-manager.html"));
  });

};
