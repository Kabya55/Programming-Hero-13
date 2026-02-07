//Problem-01: New Price for Eid Sale
function newPrice(currentPrice, discount) {
  // Your code here
  if (
    typeof currentPrice !== "number" ||
    typeof discount !== "number" ||
    discount < 0 ||
    discount > 100
  ) {
    return "Invalid";
  }

  const discountCalculation = (currentPrice * discount) / 100;
  const discountPrice = currentPrice - discountCalculation;

  return discountPrice.toFixed(3);
}

//Test Cases
console.log(newPrice(100, 20)); // 80
console.log(newPrice(100, 0)); // 100
console.log(newPrice(100, 50)); // 50
console.log(newPrice(100, 101)); // Invalid
