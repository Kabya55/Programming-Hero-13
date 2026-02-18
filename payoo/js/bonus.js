document.getElementById("bonus-btn").addEventListener("click", function () {
  const bonusCoupon = getInput("bonus-coupon");
  if (bonusCoupon == "1234") {
    alert("You Got A 500 Taka");
  }
  // Calculate current blance
  const newBlance = getBlance() + Number(500);
  setBlance(newBlance);

  // get history containner
  const history = document.getElementById("history-containner");
  // Creat anew div
  const newHistory = document.createElement("div");
  // innerHTML add new Div
  newHistory.innerHTML = `
    <div class="p-2 pl-2 mt-1 bg-base-100">
    You Got A 500 Taka</br>
      Date ${new Date()}
    </div>
    `;
  // appent newDev in history Containner
  history.appendChild(newHistory);
});
