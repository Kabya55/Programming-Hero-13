const products = [
  {
    name: "laptop",
    price: 45000,
    color: "black",
    capacity: 16,
    storage: "SSD",
  },
  { name: "phone", price: 35000, color: "blue", capacity: 8, storage: "HDD" },
  { name: "watch", price: 5000, color: "silver", capacity: 1, storage: "SSD" },
  { name: "tablet", price: 25000, color: "white", capacity: 4, storage: "SSD" },
];

function totalShopingCost(products) {
  let total = 0;
  for (const product of products) {
    total = total + product.price;
  }
  return total;
}
const totalCost = totalShopingCost(products);
console.log("Total Cost: ", totalCost, "taka");
