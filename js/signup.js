// Variables
var username = document.querySelector("[aria-describedby='nameHelp']");
var email = document.querySelector("[aria-describedby='emailHelp']");
var password = document.querySelector("[type='password']");
var signupBtn = document.querySelector(".btn");
var signupMessage = document.querySelector(".message");

var allAccounts = [];

if (localStorage.getItem("allAccounts")) {
  allAccounts = JSON.parse(localStorage.getItem("allAccounts"));
}

// When sign in button clicked
signupBtn.addEventListener("click", signup);
// Function to register an account
function signup() {
  // To validate username
  if (validateUsername()) {
    document.querySelector(".name").classList.add("d-none");

    // To validate email
    if (validateEmail()) {
      document.querySelector(".email").classList.add("d-none");

      // To validate the password
      if (validatePassword()) {
        document.querySelector(".pass").classList.add("d-none");

        if (isEmailExist()) {
          // Display Invalid message
          signupMessage.innerHTML = "email already exists";
          signupMessage.classList.remove("text-success");
          signupMessage.classList.add("text-danger");
        } else {
          var account = {
            name: username.value,
            email: email.value,
            password: password.value,
          };

          // Add the account to the array
          allAccounts.push(account);
          localStorage.setItem("allAccounts", JSON.stringify(allAccounts));

          // Display Succes message
          signupMessage.innerHTML = "Success";
          signupMessage.classList.remove("text-danger");
          signupMessage.classList.add("text-success");
        }

        // Clear the inputs
        clearInputs();
      } else {
        document.querySelector(".pass").classList.remove("d-none");
      }
    } else {
      document.querySelector(".email").classList.remove("d-none");
    }
  } else {
    document.querySelector(".name").classList.remove("d-none");
  }
}

// Function to clear the inputs
function clearInputs() {
  username.value = "";
  email.value = "";
  password.value = "";
}

// Function to check if the email is exist
function isEmailExist() {
  for (var i = 0; i < allAccounts.length; i++) {
    if (allAccounts[i].email == email.value) {
      return true;
    } else {
      return false;
    }
  }
}

// Function to validate username
function validateUsername() {
  var regExp = /^[A-Za-z][A-Za-z]{3,29}$/;
  return regExp.test(username.value);
}

// Function to validate email
function validateEmail() {
  var regExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return regExp.test(email.value);
}

// Function to validate password
function validatePassword() {
  var regExp = /^[A-Za-z0-9]{6,30}$/;
  return regExp.test(password.value);
}
