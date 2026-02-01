// Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return Even. If odd return Odd

function odd_even(num) {
  if (num % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

let number = 11;
const result = odd_even(number);
console.log(result);

let number2 = 8;
const result2 = odd_even(number2);
console.log(result2);
