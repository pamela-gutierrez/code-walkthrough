// SEE ABOVE. 
$(document).ready(function () {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  // .text is like .push. This takes is the member's name which is a class in the html and pushes it. 
  $.get("/api/user_data").then(function (data) {
    $(".member-name").text(data.email);
  });
});
