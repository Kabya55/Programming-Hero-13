document
  .getElementById("withdraw-money")
  .addEventListener("click", function () {
    // get agent number and check 11 digit
    const inputNumber = getInput("input-number");
    if (inputNumber.length != 11) {
      alert("Invlit Number");
      return;
    }
    // get amount and convart number
    const cashoutAmount = getInput("input-blance");
    console.log(inputNumber);
    // // get current blance and convart number
    // const blanceElement = document.getElementById("blance");
    // const blance = blanceElement.innerText;
    // calculate new blance
    const newBlance = getBlance() - Number(cashoutAmount);
    if (newBlance < 0) {
      alert("Invalid Blance");
      return;
    }
    // get pin
    const pass = getInput("input-pass");
    if (pass === "1234") {
      // pin match alat cashout succesfull and set net blance
      alert(`Cashout Money Successfull From 
       Agent Number: ${inputNumber} 
       Cashout Amount: ${cashoutAmount} Taka;
       Date: ${new Date()} `);
      setBlance(newBlance);
      // get history containner
      const history = document.getElementById("history-containner");
      // Creat anew div
      const newHistory = document.createElement("div");
      // innerHTML add new Div
      newHistory.innerHTML = `
    <div class="p-2 pl-2 mt-1 bg-base-100 ">
    Cashout Money Successfull From </br>
       Agent Number: ${inputNumber} </br>
       Cashout Amount: ${cashoutAmount} Taka </br>
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
  });

// console.log("Sorosoti Ma");
// document
//   .getElementById("withdraw-money")
//   .addEventListener("click", function () {
//     //get agent number and check 11 digit
//     const inputNumber = document.getElementById("input-number");
//     const number = inputNumber.value;
//     if (number.length != 11) {
//       alert("Invlit Number");
//       return;
//     }
//     // get amount and convart number
//     const inputCashoutBlance = document.getElementById("input-blance");
//     const CashoutBlance = inputCashoutBlance.value;
//     // get current blance and convart number
//     const blanceElement = document.getElementById("blance");
//     const blance = blanceElement.innerText;
//     // calculate new blance
//     const newBlance = Number(blance) - Number(CashoutBlance);
//     if (newBlance < 0) {
//       alert("Invalid Blance");
//       return;
//     }
//     // get pin
//     const inputPass = document.getElementById("input-pass");
//     const pass = inputPass.value;
//     if (pass === "1234") {
//       // pin match alat cashout succesfull and set net blance
//       alert("Cashout Successfull");
//       blanceElement.innerText = newBlance;
//     } else {
//       // pin not match alat pin invilit and return
//       alert("Invlit Pin");
//       return;
//     }
//     console.log(pass);
//   });
