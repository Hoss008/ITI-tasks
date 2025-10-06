
document.getElementById("loginBtn").addEventListener("click", function () {
  // Get values from input fields
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  // Create login object
  var login = {
    user: username,
    pass: password
  };

  // Get message element
  var message = document.getElementById("message");

  // Validate credentials
  if (login.user === "admin" && login.pass === "123") {
    message.textContent = "Welcome!";
    message.style.color = "green";
  } else {
    message.textContent = "Not registered.";
    message.style.color = "red";
  }
});
