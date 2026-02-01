// Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.

function make_avg(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  const average = sum / arr.length;
  return average;
}
const numbers = [10, 15, 20, 25, 30];
const avg = make_avg(numbers);
console.log(avg); // Output: 20
