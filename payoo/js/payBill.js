console.log("Sorosoti Ma");
document.getElementById("pay-bill-btn").addEventListener("click", function () {
  // get Select To Pay
  const selectToPay = getInput("pay-name");
  if (selectToPay == "Select back") {
    alert("Invlit Select To Pay ");
    return;
  }

  //   get Biller Account Number
  const billerAccountNumber = getInput("pay-input-number");
  if (billerAccountNumber.length != 11) {
    alert("Invalite Account Number");
    return;
  }
  // get Amount to Pay
  const amountToPay = getInput("pay-bill-input-blance");
  // Calculate current blance
  const newBlance = getBlance() - Number(amountToPay);
  if (newBlance < 0) {
    alert("Invalid Blance");
    return;
  }

  //   get pin
  const transferMonyPass = getInput("pay-bill-pass");
  if (transferMonyPass === "1234") {
    // pin match alat cashout succesfull and set net blance
    alert(
      `Pay Bill Successfull From 
      Pay To ${selectToPay}
      Biller Account Number ${billerAccountNumber} 
      Amount to Pay ${amountToPay} Taka
      Date ${new Date()} `,
    );
    setBlance(newBlance);

    // get history containner
    const history = document.getElementById("history-containner");
    // Creat anew div
    const newHistory = document.createElement("div");
    // innerHTML add new Div
    newHistory.innerHTML = `
    <div class="p-2 pl-2 mt-1 bg-base-100">
    Pay Bill Successfull From </br>
      Pay To ${selectToPay}</br>
      Biller Account Number ${billerAccountNumber} </br>
      Amount to Pay ${amountToPay} Taka</br>
      Date ${new Date()} 
    </div>
    `;
    // appent newDev in history Containner
    history.appendChild(newHistory);
  }
});
