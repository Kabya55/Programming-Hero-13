console.log("Kabya");
const pCollectons = document.querySelectorAll("#dom p");
for (const pCollecton of pCollectons) {
  pCollecton.classList.add("colour");
}

const foods = document.querySelectorAll("#food");
for (const food of foods) {
  console.log(food);
  food.style.border = "2px solid pink";
  food.style.backgroundColor = "aqua";
}
