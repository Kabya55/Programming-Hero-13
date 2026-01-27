// Write a loop that goes from 1 to 100, but stops (using break) when it encounters the first square number (like 4, 9, 16, etc.)
let i = 1;

while (i <= 100) {
  let sqrt = Math.sqrt(i);
  if (Number.isInteger(sqrt)) {
    console.log("First square number found:", i);
    break;
  }
  console.log(i);
  i++;
}
