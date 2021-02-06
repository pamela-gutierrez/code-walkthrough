// THIS WILL BE EXPLORTED TO HTML ROUTES


// This is middleware for restricting routes a user is not allowed to visit if not logged in

// Authenticatiion is asking if the user meets certain requirements (such as if they are logged in or perhaps have a paid account. If they do, they are allowed to continue down the restricted route, if they aren't, they are redirected to a login page or whatever other kind of page has been previously established as the correct path)

// req.user contains the authenticated user (they have passed the test according to passport)

module.exports = function (req, res, next) {
  // If the user is logged in, continue with the request to the restricted route
  if (req.user) {
    return next();
  }

  // If the user isn't logged in, redirect them to the login page
  return res.redirect("/");
};
