function getInput(id) {
  const getId = document.getElementById(id);
  const idValue = getId.value;
  // console.log(idValue);
  return idValue;
}

// get current blance and convart number
function getBlance() {
  const blanceElement = document.getElementById("blance");
  const blance = blanceElement.innerText;
  return Number(blance);
}

// set new blance
function setBlance(value) {
  const blanceElement = document.getElementById("blance");
  blanceElement.innerText = value;
}

// Hide and Show

function hideAndShow(id) {
  const addMoney = document.getElementById("add-money");
  const cashout = document.getElementById("cash-out");
  const transferMoney = document.getElementById("transfer-money");
  const bonus = document.getElementById("get-bonus");
  const payBill = document.getElementById("pay-bill");
  const history = document.getElementById("history");

  addMoney.classList.add("hidden");
  cashout.classList.add("hidden");
  transferMoney.classList.add("hidden");
  bonus.classList.add("hidden");
  payBill.classList.add("hidden");
  history.classList.add("history");

  const removeHidden = document.getElementById(id);
  removeHidden.classList.remove("hidden");
}
