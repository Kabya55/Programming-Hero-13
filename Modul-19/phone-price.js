const mobil = [
  { name: "iphone", price: 100000 },
  { name: "samsung", price: 40000 },
  { name: "vivo", price: 30000 },
  { name: "nokia", price: 20000 },
];

// Cheapest Phone
function getCheapestPhone(phones) {
  let cheapest = phones[0];
  for (const phone of phones) {
    if (phone.price < cheapest.price) {
      cheapest = phone;
    }
  }
  return cheapest;
}
const cheapestPhone = getCheapestPhone(mobil);
console.log("Cheapest Phone is: ", cheapestPhone);

//  hight price Phone

function getCostlyPhone(phones) {
  let cheapest = phones[0];
  for (const phone of phones) {
    if (phone.price > cheapest.price) {
      cheapest = phone;
    }
  }
  return cheapest;
}
const costlyPhone = getCostlyPhone(mobil);
console.log("Costly Phone is: ", costlyPhone);
