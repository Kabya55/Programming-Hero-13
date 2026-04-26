console.log("Sorosoti Ma");

// fetch api and add dynamic Category btn
const loadCategories = () => {
  fetch("https://openapi.programming-hero.com/api/categories")
    .then((res) => res.json())
    .then((data) => displayCategories(data.categories));
};

const displayCategories = (categories) => {
  const categoryContainer = document.getElementById("category-container");
  for (const category of categories) {
    const div = document.createElement("div");
    div.innerHTML = `
    <button id="${category.id}" onclick="loadSpecificTrees(${category.id})" class="btn  w-full categories-btn">${category.category_name}</button>
    `;
    categoryContainer.appendChild(div);
  }
};

// remove  btn-success class
const removeActiveClass = () => {
  const categories = document.querySelectorAll(".categories-btn");
  categories.forEach((category) => {
    category.classList.remove("btn-success");
  });
};

// is loading function
const toggleSpinner = (isLoading) => {
  if (isLoading == true) {
    document.getElementById("loading").classList.remove("hidden");
    document.getElementById("tree-container").classList.add("hidden");
  } else {
    document.getElementById("loading").classList.add("hidden");
    document.getElementById("tree-container").classList.remove("hidden");
  }
};

// fetch api and add dynamic trees by category
const loadSpecificTrees = (id) => {
  toggleSpinner(true);
  removeActiveClass();
  document.getElementById(id).classList.add("btn-success");
  fetch(`https://openapi.programming-hero.com/api/category/${id}`)
    .then((res) => res.json())
    .then((data) => displayTrees(data.plants));
};

// fetch api and add dynamic trees
const loadTrees = () => {
  toggleSpinner(true);
  fetch("https://openapi.programming-hero.com/api/plants")
    .then((res) => res.json())
    .then((data) => displayTrees(data.plants));
};

const displayTrees = (trees) => {
  const treeContainer = document.getElementById("tree-container");
  treeContainer.innerHTML = "";
  for (const tree of trees) {
    const div = document.createElement("div");
    div.innerHTML = `
        <div onclick="loadModal(${tree.id})" class="card bg-white shadow-sm">
            <figure>
              <img class="h-48 w-full object-cover cursor-pointer"
                src="${tree.image}"
                alt="${tree.name}"
              />
            </figure>
            <div class="card-body">
              <h2 class="card-title">${tree.name}</h2>
              <p class="line-clamp-2">
                ${tree.description}
              </p>
              <div class="badge badge-success badge-outline">${tree.category}</div>

              <div class="flex justify-between items-center">
                <h2 class="font-bold text-xl text-[#4ade80]">$ ${tree.price}</h2>
                <button class="btn green">Card</button>
              </div>
            </div>
          </div>
        `;
    treeContainer.appendChild(div);
    toggleSpinner(false);
  }
};

// // fetch api and add show Modal
const loadModal = (id) => {
  fetch(`https://openapi.programming-hero.com/api/plant/${id}`)
    .then((res) => res.json())
    .then((data) => displayModal(data.plants));
};

const displayModal = (tree) => {
  const modalContainer = document.getElementById("modal-containner");
  modalContainer.innerHTML = "";
  const div = document.createElement("div");
  div.innerHTML = `
  <h2 class="card-title">${tree.name}</h2>
            <figure>
              <img class="h-80 w-full object-cover cursor-pointer"
                src="${tree.image}"
                alt="${tree.name}"
              />
            </figure>
            <div class="card-body">
              <p class="text-sm text-gray-500 mb-2">
                <span class="font-bold">Category:</span>
                <span id="modalCategory" class="badge badge-primary"
                  >${tree.category}</span
                >
              </p>
              <p class="line-clamp-2">
                ${tree.description}
              </p>

              <div class="flex items-baseline gap-2 mb-6">
                <span class="text-3xl font-bold text-green-600"
                  >$<span id="modalPrice">${tree.price}</span></span
                >
              </div>
            </div>
  `;
  modalContainer.appendChild(div);
  document.getElementById("my_modal_5").showModal();
};

loadTrees();

loadCategories();
