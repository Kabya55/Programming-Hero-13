// Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.
function processNumber(num) {
  //   if (num % 2 === 0) {
  //     return num / 2;
  //   } else {
  //     return num * 2;
  //   }
  if (num % 2 === 0) {
    const result = num / 2;
    return result;
  } else {
    const result = num * 2;
    return result;
  }
}
// Example usage:
const result = processNumber(7);
console.log(result); // Output: 14
const result2 = processNumber(8);
console.log(result2); // Output: 4
