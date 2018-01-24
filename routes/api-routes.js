// this file will be utilized to post information to the database

var db = require("../models");

module.exports = function(app) {
   
    app.get("/api/username/:username", function(req, res) {
      // Here we add an "include" property to our options in our findOne query
      // We set the value to an array of the models we want to include in a left outer join
      db.User.findOne({
        where: {
          name: req.params.username
        }
      }).then(function(dbUser) {
        res.json(dbUser);
      });
    });
    
    
    //andrews register route
    app.post("/api/username", function(req, res) {
      db.User.create(req.body).then(function(dbUser) {
        res.json(dbUser);
      });
    });
  
  };
