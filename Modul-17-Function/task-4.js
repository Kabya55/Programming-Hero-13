//  Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.

function count_zero(binaryStr) {
  let count = 0;
  for (let i = 0; i < binaryStr.length; i++) {
    if (binaryStr[i] === "0") {
      count++;
    }
  }
  return count;
}
let binaryStr = "1001001010100";
const ziro = count_zero(binaryStr);
console.log(ziro); // Output: 8
