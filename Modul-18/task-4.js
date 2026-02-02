// Write a function to find the longest word in a given string.
// sample-input: I am learning Programming to become a programmer
// sample-output: Programming

function longestWord(str) {
  const words = str.split(" ");
  let longest = words[0];
  for (const word of words) {
    if (word.length > longest.length) {
      longest = word;
    }
  }
  return longest;
}

const result = longestWord("I am learning Programming to become a programmer");
console.log(result);
