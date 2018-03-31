var Nightmare = require("nightmare");

var nightmare = Nightmare({ show: true });

var page = nightmare
.goto("https://localhost:3000/")
  .click("#button1")
// add more tests here, but just testing the button for now
  .end()
  .then(function(result) {
    console.log(result);
  })
  .catch(function(error) {
    console.error("Search failed:", error);
  });
