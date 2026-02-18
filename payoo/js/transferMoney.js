document
  .getElementById("transfer-money-btn")
  .addEventListener("click", function () {
    //   get account number
    const userAccountNumber = getInput("transfer-money-input-number");
    if (userAccountNumber.length != 11) {
      alert("Invalite Account Number");
      return;
    }
    //   get add amount
    const transferAmount = getInput("transfer-money-input-blance");

    // Calculate current blance
    const newBlance = getBlance() - Number(transferAmount);
    if (newBlance < 0) {
      alert("Invalid Blance");
      return;
    }

    //   get pin
    const transferMonyPass = getInput("transfer-money-input-pass");
    if (transferMonyPass === "1234") {
      // pin match alat cashout succesfull and set net blance
      alert(
        `Transfer Money Successfull From 
      account Number ${userAccountNumber} 
      Transfer Amount ${transferAmount} Taka
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
    Transfer Money Successfull From </br>
      account Number ${userAccountNumber} </br>
      Transfer Amount ${transferAmount} Taka</br>
      Date ${new Date()}
    </div>
    `;
      // appent newDev in history Containner
      history.appendChild(newHistory);
      console.log(userAccountNumber);
    }
  });
