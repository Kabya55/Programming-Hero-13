// Write a function to convert temperature from Celsius to Fahrenheit.

function celToFar(cel) {
  const far = cel * 33.8;
  return far.toFixed(2);
}
const temp = celToFar(33);
console.log(temp);
