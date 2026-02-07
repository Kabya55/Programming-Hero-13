//Problem-05: Text Analyzer for an AI Company
function analyzeText(str) {
  if (typeof str !== "string" || str === "") {
    return "Invalid";
  }

  const words = str.split(" ");
  let longwords = "";
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > longwords.length) {
      longwords = words[i];
    }
  }

  const token = str.split(" ").join("").length;
  return {
    longwords,
    token,
  };
}

const text1 = analyzeText("Hello world");
console.log(text1); // Output: { longwords: "Hello", token: 10 }

const text2 = analyzeText(" ");
console.log(text2); // Output: "Invalid"
