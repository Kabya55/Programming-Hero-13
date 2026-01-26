// Checking if it's an Array
// Instructions:
// Create different variables, each containing either an array or a non-array value.
// Now use isArray to check if each variable is an array.
// Print a message to the console indicating whether each variable is an array or not.

let fruits = ["apple", "banana", "cherry", "mango", "elderberry"];
let name = "Kabya";
let age = 28;
let number = [1, 2, 3, 4];
let pass = true;

console.log(Array.isArray(fruits)); // true
console.log(Array.isArray(name));
console.log(Array.isArray(age));
console.log(Array.isArray(number));
console.log(Array.isArray(pass));

if (Array.isArray(fruits)) {
  console.log("fruits is an array.");
} else {
  console.log("fruits is not an array.");
}
if (Array.isArray(name)) {
  console.log("name is an array.");
} else {
  console.log("name is not an array.");
}
