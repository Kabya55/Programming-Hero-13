document.getElementById("add-money-btn").addEventListener("click", function () {
  //   console.log("add money click");
  // get Bank
  const bankName = getInput("bank-name");
  if (bankName == "Select A Bank") {
    alert("Select A Bank");
    return;
  }
  //   get account number
  const bankAccountNumber = getInput("add-mony-input-number");
  if (bankAccountNumber.length != 11) {
    alert("Invalite Account Number");
    return;
  }
  //   get add amount
  const addAmount = getInput("add-mony-input-blance");

  // Calculate current blance
  const newBlance = getBlance() + Number(addAmount);

  //   get pin
  const addMonyPass = getInput("add-mony-pass");
  if (addMonyPass === "1234") {
    // pin match alat cashout succesfull and set net blance
    alert(
      `Add Money Successfull From 
      Bank name ${bankName}
      account Number ${bankAccountNumber} 
      Add Amount ${addAmount} Taka
      at ${new Date()} `,
    );
    setBlance(newBlance);

    // get history containner
    const history = document.getElementById("history-containner");
    // Creat anew div
    const newHistory = document.createElement("div");
    // innerHTML add new Div
    newHistory.innerHTML = `
    <div class="p-2 mt-1 bg-base-100">
    Add Money Successfull From </br>
      Bank name: ${bankName}</br>
      Account Number: ${bankAccountNumber} </br>
      Add Amount: ${addAmount} Taka</br>
      Date: ${new Date()}
    </div>
    `;
    // appent newDev in history Containner
    history.appendChild(newHistory);
  } else {
    // pin not match alat pin invilit and return
    alert("Invlit Pin");
    return;
  }
  // console.log(addMonyPass);
});
