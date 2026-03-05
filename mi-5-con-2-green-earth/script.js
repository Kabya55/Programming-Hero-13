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
    <button class="btn  w-full">${category.category_name}</button>
    `;
    categoryContainer.appendChild(div);
  }
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

// fetch api and add dynamic trees
const loadTrees = () => {
  toggleSpinner(true);
  fetch("https://openapi.programming-hero.com/api/plants")
    .then((res) => res.json())
    .then((data) => displayTrees(data.plants));
};

const displayTrees = (trees) => {
  const treeContainer = document.getElementById("tree-container");
  for (const tree of trees) {
    const div = document.createElement("div");
    div.innerHTML = `
        <div class="card bg-white shadow-sm">
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
loadTrees();

loadCategories();
