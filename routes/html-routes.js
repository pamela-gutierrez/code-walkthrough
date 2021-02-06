// Requiring path to so we can use relative routes to our HTML files
var path = require("path");

// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");
// WE ARE GETTING THIS FROM THE isAuthenticated.js file
// this line is what prepares the file to be exported.
module.exports = function (app) {
  // This is a get request METHOD that sends HTML member file as a response if the person is a member(if there is already an account). If the person is not a member, sends them to the signup page. If not, it sends them to the signup page.
  app.get("/", function (req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    res.sendFile(path.join(__dirname, "../public/signup.html"));
  });

  // If you're already logged in, it'll send you to the members page. If you're already a member, you don't need to sign up. 
  app.get("/login", function (req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/members", isAuthenticated, function (req, res) {
    res.sendFile(path.join(__dirname, "../public/members.html"));
  });

};
