// These are the required packages and dependencies
var passport = require("passport");
// One of the strategies of passport, asks for username and password.
var LocalStrategy = require("passport-local").Strategy;

// this is pointing to the folder containing the code that we need. Directing us to models folder.
var db = require("../models");

// Telling passport we want to use a Local Strategy. In other words, we want login with a username/email and password.... COME BACK TO usernameField Question. Is this built in syntax or is it farley bacon chicken?
passport.use(new LocalStrategy(
  // Our user will sign in using an email, rather than a "username"
  {
    usernameField: "email"
  },

  // The local authentication strategy authenticates users using a username and password. The strategy requires a verify callback, which accepts these credentials and calls done providing a user. The done is the callback, and it always returns done.
  function (email, password, done) {
    // When a user tries to sign in this code runs
    db.User.findOne({
      where: {
        email: email
      }
      // dbuser is whatever you want to call it as long as it matches whatever is in the if statement below. in class we often use answer or result. 
      // The done function can take the null paramenter first, then false, then the callback function. In this case, a message. Diff between null and false is that null can be empty and false is wrong.
    }).then(function (dbUser) {
      // If there's no user with the given email
      if (!dbUser) {
        return done(null, false, {
          message: "Incorrect email."
        });
      }
      // If there is a user with the given email, but the password the user gives us is incorrect
      else if (!dbUser.validPassword(password)) {
        return done(null, false, {
          message: "Incorrect password."
        });
      }
      // If none of the above, return the user. the dbUser needs to be the same as what's in line 25 vecayse that's just the result of the function.
      return done(null, dbUser);
    });
  }
));

// In order to help keep authentication state across HTTP requests,
// Sequelize needs to serialize and deserialize the user
// Just consider this part boilerplate needed to make it all work

// Serialize takes the information from a user and packs it up to make it smaller and easier to send (it turns into a string)
passport.serializeUser(function (user, cb) {
  cb(null, user);
});

// It is then constructed again. turns if from a string into an object again. 
passport.deserializeUser(function (obj, cb) {
  cb(null, obj);
});

// Exporting our configured passport
module.exports = passport;
// Takes this information and exports it to be used somewhere else.