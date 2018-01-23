// this file will be utilized to post information to the database

var db = require("../models");

module.exports = function(app) {
    app.get("/api/authors", function(req, res) {
      // Here we add an "include" property to our options in our findAll query
      // We set the value to an array of the models we want to include in a left outer join. In this case, just db.Post
      db.Author.findAll({
        include: [db.Post]
      }).then(function(dbAuthor) {
        res.json(dbAuthor);
      });
    });
  
    app.get("/api/user/:username", function(req, res) {
      // Here we add an "include" property to our options in our findOne query
      // We set the value to an array of the models we want to include in a left outer join
      // In this case, just db.Post

      console.log(req.params);
      
      db.User.findOne({
        where: {
          name: req.params.username
        }
      }).then(function(dbUser) {
        res.json(dbUser);
      });
    });
    
    //andrews register route
    app.post("/api/new", function(req, res) {
      db.User.create(req.body).then(function(dbUser) {
        res.json(dbUser);
      });
    });
  
    app.delete("/api/authors/:id", function(req, res) {
      db.Author.destroy({
        where: {
          id: req.params.id
        }
      }).then(function(dbAuthor) {
        res.json(dbAuthor);
      });
    });
  
  };
