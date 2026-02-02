const bitanyKhor = ["babul", "kabul", "babul", "habul", "kabul"];

function noDuplickete(arr) {
  let unic = [];
  for (const item of arr) {
    if (unic.includes(item) === false) {
      unic.push(item);
    }
  }
  return unic;
}
const unickArr = noDuplickete(bitanyKhor);
console.log(unickArr);
