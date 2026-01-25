let height = 1.57;
let weight = 50;
let bmi = weight / (height * height);

if (bmi < 18.5) {
  console.log("Bmi:", bmi.toFixed(2), "You are underweight");
} else if (bmi >= 18.5 && bmi < 25) {
  console.log("Bmi:", bmi.toFixed(2), "You are normal");
} else if (bmi >= 25 && bmi <= 29.9) {
  console.log("Bmi:", bmi.toFixed(2), "You are overweight");
} else {
  console.log("Bmi:", bmi.toFixed(2), "You are obese");
}
