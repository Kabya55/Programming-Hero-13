// You are given an array of numbers. Count how many times the a number is repeated in the array.

// sample-input: numbers = [5,6,11,12,98, 5]

// find: 5

// output: 2

function countNumber(numbers, find) {
  let count = 0;
  for (const num of numbers) {
    if (num === find) {
      count++;
    }
  }
  return count;
}
const numbers = [5, 6, 11, 12, 98, 5];
const find = 5;
const result = countNumber(numbers, find);
console.log(result);

// sample-input:
// numbers = [5,6,11,12,98, 5]
// find: 25
// output: 0

const numbers2 = [5, 6, 11, 12, 98, 5];
const find2 = 25;
const result2 = countNumber(numbers2, find2);
console.log(result2);
