// TODO test functionality, set up/test back-end routing

var db = require("../models");

module.exports = function(app) {

  app.get("/api/puppies/", function(req, res) {
    db.puppies.findAll({})
      .then(function(dbpuppies) {
        res.json(dbpuppies);
      });
  });

  app.get("/api/puppies/:id", function(req, res) {
    db.puppies.findOne({
      where: {
        id: req.params.id
      }
    })
      .then(function(dbpuppies) {
        res.json(dbpuppies);
      });
  });

  // POST route for saving a new post
  app.post("/api/puppies", function(req, res) {
    console.log(req.body);
    db.puppies.create({
      name: req.body.name,
      breed: req.body.breed,
      gender: req.body.gender, 
      age: req.body.age, 
      info: req.body.info, 
      photo_link: req.body.photo_link
    })
      .then(function(dbpuppies) {
        res.json(dbpuppies);
      });
  });

  app.delete("/api/puppies/:id", function(req, res) {
    db.puppies.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(function(dbpuppies) {
        res.json(dbpuppies);
      });
  });

  app.put("/api/puppies", function(req, res) {
    db.puppies.update(req.body,
      {
        where: {
          id: req.body.id
        }
      })
      .then(function(dbpuppies) {
        res.json(dbpuppies);
      });
  });
};