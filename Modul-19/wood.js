// Wood Quntaty
function woodQuntaty(chairQuntaty, tableQuntaty, bedQuntaty) {
  const perChairWood = 3;
  const perTableWood = 10;
  const perBedWood = 50;

  const totalWood =
    chairQuntaty * perChairWood +
    tableQuntaty * perTableWood +
    bedQuntaty * perBedWood;
  return totalWood;
}

const totalWood = woodQuntaty(5, 3, 1);
console.log("Total Wood Is:", totalWood);

// Shopping Cost
function shoppingCost(shart, pant, shoe) {
  const perShartPrice = 500;
  const perPantPrice = 300;
  const perShoePrice = 300;

  const totolCost =
    shart * perShartPrice + pant * perPantPrice + shoe * perShoePrice;
  return totolCost;
}

const totolCost = shoppingCost(3, 2, 5);
console.log("Total Cost Is:", totolCost);
