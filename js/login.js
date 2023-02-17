// Variables
var email = document.querySelector("[aria-describedby='emailHelp']");
var password = document.querySelector("[type='password']");
var loginBtn = document.querySelector(".btn");

var allAccounts = [];
if (localStorage.getItem("allAccounts")) {
  allAccounts = JSON.parse(localStorage.getItem("allAccounts"));
}

var userPassword = "";
var username = "";

loginBtn.addEventListener("click", login);

// Function to login
function login() {
  if (isEmailExist()) {
    if (password.value == userPassword) {
      loginBtn.href = "./home.html";
      localStorage.setItem("accountName", username);
    } else {
      window.alert("Password is invalid");
      // Clear password input field
      password.value = "";
    }
  } else {
    window.alert("This email doesn't exist");
  }
}

// Function to check if email exist
function isEmailExist() {
  for (var i = 0; i < allAccounts.length; i++) {
    if (allAccounts[i].email == email.value) {
      userPassword = allAccounts[i].password;
      username = allAccounts[i].name;
      return true;
    } else {
      return false;
    }
  }
}
