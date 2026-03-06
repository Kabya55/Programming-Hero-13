document.getElementById("login-btn").addEventListener("click", function () {
  const inputUsername = document.getElementById("input-username");
  const number = inputUsername.value;
  const inputPass = document.getElementById("input-pass");
  const pass = inputPass.value;

  if (number === "admin" && pass === "admin123") {
    window.location.assign("../home.html");
  } else {
    alert("Login Faild");
    return;
  }
});
