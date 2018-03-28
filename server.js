
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 3000;

const methodOverride = require("method-override");
app.use(methodOverride("_method"));

const db = require("./models");

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.use(express.static("public"));

const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

require("./routes/api_routes.js")(app);
require("./routes/html_routes.js")(app);

db.sequelize.sync({ force: false }).then(function() {
  // seed the database with puppies
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});