console.log("Mohadev");
// Parent Node
const bodyContainner = document.getElementById("body");
// Create child
const newSection = document.createElement("section");

// Create H1
const h1 = document.createElement("h1");
h1.innerText = "Hobby";
newSection.appendChild(h1);

// Create ul
const ul = document.createElement("ul");
newSection.appendChild(ul);

// Creates li
const li1 = document.createElement("li");
li1.innerText = "HTML";
ul.appendChild(li1);

const li2 = document.createElement("li");
li2.innerText = "Css";
ul.appendChild(li2);

const li3 = document.createElement("li");
li3.innerText = "JS";
ul.appendChild(li3);
//  append the child to the parent
bodyContainner.appendChild(newSection);

//  Easier to create HTML
const phoneLists = document.createElement("section");
bodyContainner.appendChild(phoneLists);

phoneLists.innerHTML = `
<h1> Phone Name List </h1>
<ul>

<li>Iphone</li>
<li>Samsung </li>
<li>Xiomi</li>
<li>Nokia</li>

</ul>
`;
