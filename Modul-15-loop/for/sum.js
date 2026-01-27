// sum of all the odd numbers from 91 to 129.
let sum = 0;
for (let i = 91; i <= 129; i++) {
  if (i % 2 === 1) {
    sum += i;
  }
}
console.log("The sum of all odd numbers from 91 to 129 is:", sum);

// sum of all the even numbers from 51 to 85.
let sum2 = 0;
for (let i = 51; i <= 85; i++) {
  if (i % 2 === 0) {
    sum2 += i;
  }
}
console.log("The sum of all even numbers from 51 to 85 is:", sum2);
