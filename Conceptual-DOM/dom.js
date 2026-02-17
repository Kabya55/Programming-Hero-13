console.log("Sorosoti ma");
const count = document.getElementById("count");
// console.log(count);
const btn = document
  .getElementById("btn")
  .addEventListener("click", function () {
    //   let currentCount = parseInt(count.innerText);
    let currentCount = count.innerText;
    currentCount++;
    count.innerText = currentCount;
  });

let loveCount = document.getElementById("love-count");
// console.log(loveCount);
const loveCountBtn = document.querySelectorAll(".love-count-btn");

loveCountBtn.forEach((btn) => {
  btn.addEventListener("click", function () {
    // let currentWishCount = document.getElementById("love-count");
    let currentWishCount = loveCount.innerText;
    currentWishCount++;
    // console.log(counts);
    loveCount.innerText = currentWishCount;
  });
});

// add to card
const addToCardBtns = document.querySelectorAll(".add-to-card-btn");
let card = [];

addToCardBtns.forEach((btn) => {
  btn.addEventListener("click", function (ele) {
    const card = ele.target.closest(".wish-div");
    // console.log(card);
    const productCategory = card.querySelector(".product-category").innerText;
    const productName = card.querySelector(".product-name").innerText;
    const productPrice = card.querySelector(".product-price").innerText;

    const product = {
      productCategory,
      productName,
      productPrice,
      quntaty: 1,
    };
    addToCard(product);
  });
});

function addToCard(product) {
  const existingItem = card.find(
    (item) => item.productName === product.productName,
  );

  if (existingItem) {
    existingItem.quntaty++;
  } else {
    card.push(product);
  }
  updateCard();
}

const cardItemsDiv = document.getElementById("card-item");

function updateCard() {
  cardItemsDiv.innerHTML = "";
  let total = 0;
  let totalItem = 0;
  card.forEach((item) => {
    total = total + item.productPrice * item.quntaty;
    totalItem = totalItem + item.quntaty;

    const div = document.createElement("div");
    div.innerHTML = `
    ${item.productCategory} ${item.productName} (price= ${item.productPrice * item.quntaty}) ${item.quntaty}
    `;
    cardItemsDiv.appendChild(div);
    const p = document.createElement("p");
    p.innerHTML = `
    (Total= ${total}, ) (Total Item= ${totalItem})
    `;
    cardItemsDiv.appendChild(p);
  });
  updateTotal();
}
