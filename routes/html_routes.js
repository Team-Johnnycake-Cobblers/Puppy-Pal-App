const homeController = require("../controllers/home");
const shelterController = require("../controllers/shelter");
const puppiesController = require("../controllers/puppies");

module.exports = function(app) {
  app.get("/", homeController.renderHome);
  app.get("/shelter", shelterController.renderShelter);
  app.get("/puppies", puppiesController.renderPuppies);
}; 