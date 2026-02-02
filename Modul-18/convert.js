// 1 feet = 12 inches
function feetToInches(feet) {
  const inches = feet * 12;
  return inches.toFixed(2);
}
const inches = feetToInches(5.9);
console.log(inches);

// 12 inches = 1 feet
function inchToFeet(inch) {
  const feet = inch / 12;
  const feetNumber = parseInt(feet);
  const inchRemaining = (inch % 12).toFixed(0);
  const result = feetNumber + " feet " + inchRemaining + " inches";
  return result;
}
const feet = inchToFeet(70);
console.log(feet);
