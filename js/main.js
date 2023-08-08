var userDataArray = [];

var userName = document.getElementById("user_Name");
var userEmail = document.getElementById("user_Email");
var userPassword = document.getElementById("user_Password");
var insertedEmail = document.getElementById("insertedEmail");
var insertedPassword = document.getElementById("insertedPassword");
var Name = localStorage.getItem("session");

function signUp() {
  var userDataObject = {
    uName: userName.value,
    uEmail: userEmail.value,
    uPassword: userPassword.value,
  };

  if (
    validateEmail2(userEmail.value) == true &&
    validatePassword2(userPassword.value) == true
  ) {
    userDataArray.push(userDataObject);
    localStorage.setItem("userData", JSON.stringify(userDataArray));
    window.location.href = "index.html";
  } else if (validateEmail2(userEmail.value) == false) {
    document.getElementById('dom_email').innerHTML='Invalid Email, kindly enter a valid email'
  } else if (validatePassword2(userPassword.value) == false) {
    document.getElementById('dom_password').innerHTML='Invalid Password, password must have at least 8 characters,numbers and capital letters'
  } 
}

function logIn2() {
  userDataArray = JSON.parse(localStorage.getItem("userData"));

  for (var i = 0; i < userDataArray.length; i++) {
    if (
      userDataArray[i].uEmail == insertedEmail.value &&
      userDataArray[i].uPassword == insertedPassword.value
    ) {
      localStorage.setItem("session", userDataArray[i].uName);
      window.location.href = "homepage.html";
    } else {
      document.getElementById('error').innerHTML="Invalid email or password"
    }
  }
}

function checkUrl() {
  var url = "file:///C:/Users/donal/OneDrive/Desktop/dd/homepage.html";
  url.includes = "homepage";

  if (localStorage.getItem("session") == null && document.URL == url) {
    window.location.href = "index.html";
  }
}

checkUrl();

function validateEmail2(email) {
  var regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (regex.test(email) == true) {
    return true;
  } else {
    return false;
  }
}

function validatePassword2(password) {
  var regex2 = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
  if (regex2.test(password) == true) {
    return true;
  } else {
    return false;
  }
}








