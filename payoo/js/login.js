document.getElementById("login-btn").addEventListener("click", function () {
  const inputNumber = document.getElementById("input-number");
  const number = inputNumber.value;
  //   console.log(number);
  const inputPass = document.getElementById("input-pass");
  const pass = inputPass.value;

  if (number === "12345678901" && pass === "1234") {
    // alert("Login Success");
    window.location.assign("../home.html");
  } else {
    alert("Login Faild");
    return;
  }
});
