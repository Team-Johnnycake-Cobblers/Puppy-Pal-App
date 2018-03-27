// TODO test functionality

var apiController = require("../controllers/api_controller.js");

module.exports = function(app) {
  app.get("/api/puppies/", apiController.findAllPuppies); 

  app.get("/api/puppies/:id", apiController.findOnePuppy);

  app.post("api/puppies", apiController.postPuppy); 

  app.put("/api/puppies", apiController.changePuppy);

  app.delete("api/puppies/:id", apiController.deletePuppy); 
};