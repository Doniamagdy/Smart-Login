function welcomeMessage() {
  var message = `<h1>Welcome to Home Page</h1>`;
  document.getElementById("displayName").innerHTML = message + Name;
}
welcomeMessage();

function logout() {
  localStorage.removeItem("session");
  window.location.href = "index.html";
}
