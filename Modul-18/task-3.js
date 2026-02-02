// Write a function to count the number of vowels in a string.

function countVowels(str) {
  let count = 0;
  for (const item of str) {
    if (
      item === "a" ||
      item === "e" ||
      item === "i" ||
      item === "o" ||
      item === "u"
    ) {
      count++;
    }
  }
  return count;
}
const result = countVowels("hello world");
console.log("Number of vowels: " + result);
