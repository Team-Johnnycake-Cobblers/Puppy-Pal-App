module.exports = {
    renderHome: function(req, res) {
      res.render("../views/home.handlebars", {
        msg: "Welcome! this is data being passed into the render method!"
      });
    }
  };