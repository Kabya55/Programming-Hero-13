const products = [
  {
    name: "laptop",
    price: 45000,
    color: "black",
    capacity: 16,
    storage: "SSD",
    quantity: 2,
  },
  {
    name: "phone",
    price: 35000,
    color: "blue",
    capacity: 8,
    storage: "HDD",
    quantity: 2,
  },
  {
    name: "watch",
    price: 5000,
    color: "silver",
    capacity: 1,
    storage: "SSD",
    quantity: 1,
  },
  {
    name: "tablet",
    price: 25000,
    color: "white",
    capacity: 4,
    storage: "SSD",
    quantity: 2,
  },
];

function totalShopingCost(products) {
  let total = 0;
  for (const product of products) {
    total = total + product.price * product.quantity;
  }
  return total;
}
const totalCost = totalShopingCost(products);
console.log("Total Cost: ", totalCost, "taka");
