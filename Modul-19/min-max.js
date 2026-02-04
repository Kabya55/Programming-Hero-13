// Min
const price = [20000, 13000, 15000, 100000, 25000];

function getMin(prices) {
  let min = prices[0];
  for (const num of prices) {
    if (num < min) {
      min = num;
    }
  }
  return min;
}
const min = getMin(price);
console.log("Min Number is :", min);

// Max
function getMax(prices) {
  let max = prices[0];
  for (const num of prices) {
    if (num > max) {
      max = num;
    }
  }
  return max;
}
const max = getMax(price);
console.log("Max Number is :", max);
