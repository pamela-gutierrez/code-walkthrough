// A page can't be manipulated safely until the document is "ready." jQuery detects this state of readiness for you. Code included inside $( document ).ready() will only run once the page Document Object Model (DOM) is ready for JavaScript code to execute. Code included inside $( window ).on( "load", function() { ... }) will run once the entire page (images or iframes), not just the DOM, is ready.
$(document).ready(function () {
  // Getting references to our form and inputs
  // Form is the name of the header and login is the class. It is the same for ids below. 
  var loginForm = $("form.login");
  var emailInput = $("input#email-input");
  var passwordInput = $("input#password-input");

  // When the form is submitted, we validate there's an email and password entered
  // on click even that kicks off the function. 
  // The variable creates a new object containing the user's data with the key value pairs. If there is nothing in the email or password fields, it returns to the main page and login form again.
  loginForm.on("submit", function (event) {
    event.preventDefault();
    var userData = {
      email: emailInput.val().trim(),
      password: passwordInput.val().trim()
    };

    if (!userData.email || !userData.password) {
      return;
    }

    // If we have an email and password we run the loginUser function and clear the form, call the login function which is below.
    loginUser(userData.email, userData.password);
    emailInput.val("");
    passwordInput.val("");
  });

  // loginUser does a post to our "api/login" route and if successful, redirects us the the members page. 
  // The $.post() method requests data from the server using an HTTP POST request. This sends the email and password.
  function loginUser(email, password) {
    $.post("/api/login", {
      email: email,
      password: password
    })

      // this changes the path from login to members if the route was successful.
      .then(function () {
        window.location.replace("/members");
        // If there's an error, log the error
      })
      // .catch errors.
      .catch(function (err) {
        console.log(err);
      });
  }
});
