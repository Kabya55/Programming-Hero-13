function oddAverage(arr) {
  let odd = [];
  for (const num of arr) {
    if (num % 2 === 0) {
      odd.push(num);
    }
  }
  console.log(odd);
  let sum = 0;
  for (const num of odd) {
    sum += num;
  }
  console.log(sum);
  const count = odd.length;
  const average = sum / count;
  return average;
}
const number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const result = oddAverage(number);
console.log(result);
