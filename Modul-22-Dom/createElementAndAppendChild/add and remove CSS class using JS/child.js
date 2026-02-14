console.log("Radha Radha");

// Creat element and set inner text
const newChild = document.createElement("li");
newChild.innerText = "Gril";

// find the parent where you will add child
const foodList = document.getElementById("food-list");

//  append the child to the parent
foodList.appendChild(newChild);
