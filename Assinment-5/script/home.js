// loading spinner
const toggleSpinner = (isLoading) => {
  if (isLoading == true) {
    document.getElementById("loading-spinner").classList.remove("hidden");
    document.getElementById("all-issues-container").classList.add("hidden");
  } else {
    document.getElementById("loading-spinner").classList.add("hidden");
    document.getElementById("all-issues-container").classList.remove("hidden");
  }
};

// labels array to html element
const createElement = (arr) => {
  const htmlElement = arr.map(
    (el) =>
      `
    <span class="flex items-center gap-1 px-3 py-1 rounded-full bg-red-100 text-red-500 text-sm">${el}</span>
    `,
  );
  return htmlElement.join(" ");
};

let allIssues = [];

// fetch api data
const loadAllIssues = () => {
  toggleSpinner(true);
  fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues")
    .then((response) => response.json())
    .then((data) => {
      allIssues = data.data;
      desplayAllIssues(allIssues);
    });
};

// filtering Open Issues data
const loadOpenIssues = () => {
  toggleSpinner(true);
  const openIssues = allIssues.filter((issue) => issue.status === "open");
  desplayAllIssues(openIssues);
};

// filtering Closed Issues data
const loadClosedIssues = () => {
  toggleSpinner(true);
  const closedIssues = allIssues.filter((issue) => issue.status === "closed");
  desplayAllIssues(closedIssues);
};

// displaying issues
const desplayAllIssues = (issues) => {
  const allIssuesContainer = document.getElementById("all-issues-container");
  //   update issue count
  const issuCount = document.getElementById("issu-count");
  issuCount.textContent = `${issues.length} Issues`;
  allIssuesContainer.innerHTML = "";
  issues.forEach((issue) => {
    // determine border color based on issue status
    const borderColor =
      issue.status === "open" ? "border-green-500" : "border-[#A855F7]";
    //Open issu and closed issu icon
    const statusIcon =
      issue.status === "open"
        ? `<img src="../assets/Open-Status.png" alt="open">`
        : `<img src="../assets/Closed- Status .png" alt="closed">`;
    //   create issue card
    const div = document.createElement("div");
    div.classList.add("flex", "justify-center", "items-center");
    div.innerHTML = `
     <div onclick="loadModal(${issue.id})"
        class="w-[340px] bg-white rounded-lg shadow-md border-t-4 ${borderColor}"
      >
        <div class="p-5">
          <div class="flex items-start justify-between mb-4">
            <span
              class="px-4 py-1 "
            >
              ${statusIcon}
            </span>
            <span
              class="px-4 py-1 rounded-full bg-red-100 text-red-500 text-sm font-medium"
            >
              ${issue.priority}
            </span>
            
          </div>

          <h2 class="text-lg font-semibold text-gray-800 mb-2">
            ${issue.title}
          </h2>

          <p class="text-gray-500 text-sm mb-4">
            ${issue.description}
          </p>

          <div class="flex gap-3">
          ${createElement(issue.labels)}
            
          </div>
        </div>

        <div
          class="border-t px-5 py-4 text-gray-500 text-sm space-y-1 flex items-center justify-between"
        >
          <p>${issue.author}</p>
          <p>${issue.createdAt}</p>
        </div>
        <div
          class="px-5 py-4 text-gray-500 text-sm space-y-1 flex items-center justify-between"
        >
          <p>${issue.assignee}</p>
          <p>${issue.updatedAt}</p>
        </div>
      </div>
    `;
    allIssuesContainer.appendChild(div);
    toggleSpinner(false);
  });
};

// load modal data
const loadModal = (id) => {
  fetch(`https://phi-lab-server.vercel.app/api/v1/lab/issue/${id}`)
    .then((response) => response.json())
    .then((data) => desplayModal(data.data));
};
// displaying modal data
const desplayModal = (issue) => {
  const modalContainner = document.getElementById("modal-containner");
  modalContainner.innerHTML = "";
  const div = document.createElement("div");
  div.innerHTML = `
  <h1 class="text-2xl font-semibold text-gray-800 mb-3">
            ${issue.title}
          </h1>

          
          <div class="flex items-center gap-3 text-sm text-gray-500 mb-4">
            <span
              class="bg-green-500 text-white px-3 py-1 rounded-full text-xs"
            >
              ${issue.status}
            </span>

            <span>• ${issue.author}</span>

            <span>• ${issue.createdAt}</span>
          </div>

          
          <div class="flex gap-3 mb-5">
            ${createElement(issue.labels)}
          </div>

          
          <p class="text-gray-600 mb-6">
            ${issue.description}
          </p>

         
          <div class="bg-gray-100 rounded-lg p-5 flex justify-between mb-6">
            <div>
              <p class="text-gray-500 text-sm">Assignee: </p>
              <p class="font-semibold text-gray-800">${issue.assignee}</p>
            </div>

            <div>
              <p class="text-gray-500 text-sm">Priority:</p>
              <span
                class="bg-red-500 text-white text-xs px-3 py-1 rounded-full"
              >
                ${issue.priority}
              </span>
            </div>
          </div>
          
  `;
  modalContainner.appendChild(div);
  document.getElementById("my_modal_5").showModal();
};

// active button
function setActive(button) {
  const buttons = document.querySelectorAll(".active-btn");

  buttons.forEach((btn) => {
    btn.classList.remove("btn-primary");
  });

  button.classList.add("btn-primary");
}

loadAllIssues();

// serch functionality
document.getElementById("btn-serch").addEventListener("click", function () {
  document
    .querySelectorAll(".active-btn")
    .forEach((btn) => btn.classList.remove("btn-primary"));
  const serchInput = document.getElementById("input-serch");
  const value = serchInput.value.trim().toLowerCase();
  if (value === "") {
    alert("Please enter a word to search");
    return;
  }

  fetch(`https://phi-lab-server.vercel.app/api/v1/lab/issues/search?q=${value}`)
    .then((response) => response.json())
    .then((data) => {
      if (data.data.length === 0) {
        alert("No result found");
        return;
      }
      const allIssu = data.data;

      const filtereIssu = allIssu.filter((data) =>
        data.title.toLowerCase().includes(value),
      );
      desplayAllIssues(filtereIssu);
    });
});
