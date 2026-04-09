
// Step 1: Initialize an empty array to store user data
var userDataArray = [];

// Step 2: Get references to HTML input fields for signup and login
var userName = document.getElementById("user_Name");
var userEmail = document.getElementById("user_Email");
var userPassword = document.getElementById("user_Password");
//login
var insertedEmail = document.getElementById("insertedEmail");
var insertedPassword = document.getElementById("insertedPassword");

// Step 3: Retrieve session data (if any) from localStorage
var Name = localStorage.getItem("session");


// Step 4: Define the `signUp` function to handle user registration
function signUp() {
  // Step 4.1: Create an object with user-provided data
  var userDataObject = {
    uName: userName.value,
    uEmail: userEmail.value,
    uPassword: userPassword.value,
  };

  
  // Step 4.2: Validate the email and password before saving
  if (
    validateEmail2(userEmail.value) == true && // Check if email is valid
    validatePassword2(userPassword.value) == true // Check if password is valid
  ) {
    // Step 4.3: Push the user data object into the array and save it to localStorage
    userDataArray.push(userDataObject);

    localStorage.setItem("userData", JSON.stringify(userDataArray));
  
    // Step 4.4: Redirect the user to the index.html page after successful signup
    window.location.href = "index.html";
  } else if (validateEmail2(userEmail.value) == false) {
    // Step 4.5: Show an error message if the email is invalid
    document.getElementById('dom_email').innerHTML='Invalid Email, kindly enter a valid email';
  } else if (validatePassword2(userPassword.value) == false) {
    // Step 4.6: Show an error message if the password is invalid
    document.getElementById('dom_password').innerHTML='Invalid Password, password must have at least 8 characters, numbers, and capital letters';
  }
}

// Step 5: Define the `logIn2` function to handle user login
function logIn2() {
  // Step 5.1: Retrieve stored user data from localStorage, as we register now we want the data back to start to login
  userDataArray = JSON.parse(localStorage.getItem("userData"));

  // Step 5.2: Iterate through the stored user data to find a match
  for (var i = 0; i < userDataArray.length; i++) {
    if ( userDataArray[i].uEmail == insertedEmail.value && // Check if email matches
         userDataArray[i].uPassword == insertedPassword.value // Check if password matches
 ) {
      // Step 5.3: Save the username to the session in localStorage and redirect to homepage
      localStorage.setItem("session", userDataArray[i].uName);
      window.location.href = "homepage.html";
    } else {
      // Step 5.4: Show an error message if the credentials are invalid
      document.getElementById('error').innerHTML="Invalid email or password";
    }
    
  }

}

// Step 6: Define a function `checkUrl` to ensure only logged-in users can access the homepage
// function checkUrl() {
//   // Step 6.1: Define the homepage URL (specific to local environment in this case)
//   var url = "file:///C:/Users/donal/OneDrive/Desktop/dd/homepage.html";

//   // Step 6.2: Check if no session exists and the current URL matches the homepage URL
//   if (localStorage.getItem("session") == null && document.URL == url) {
//     // Step 6.3: Redirect to the index.html if no session is found
//     window.location.href = "index.html";]
//   }
// }

function checkUrl() {
  // Step 1: Extract the current page's filename from the URL
  var currentPage = window.location.pathname.split("/").pop();

  // Step 2: Check if no session exists and the current page is the homepage
  if (localStorage.getItem("session") == null && currentPage === "homepage.html") {
    // Step 3: Redirect to the index.html if no session is found
    window.location.href = "index.html";
  }
}

// Step 7: Call the `checkUrl` function to enforce access control on page load
checkUrl();

// Step 8: Define the `validateEmail2` function to validate email format
function validateEmail2(email) {
  // Step 8.1: Define a regular expression for validating email format
  var regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  // Step 8.2: Test the email input against the regex and return the result
  return regex.test(email);
}

// Step 9: Define the `validatePassword2` function to validate password strength
function validatePassword2(password) {
  // Step 9.1: Define a regex to ensure the password has at least 8 characters, one digit, one uppercase letter, and one lowercase letter
  var regex2 = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
  // Step 9.2: Test the password input against the regex and return the result
  return regex2.test(password);
}





