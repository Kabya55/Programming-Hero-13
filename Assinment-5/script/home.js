const createElement = (arr) => {
  const htmlElement = arr.map(
    (el) =>
      `
    <span class="flex items-center gap-1 px-3 py-1 rounded-full bg-red-100 text-red-500 text-sm">${el}</span>
    `,
  );
  return htmlElement.join(" ");
};

const loadAllIssues = () => {
  fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues")
    .then((response) => response.json())
    .then((data) => desplayAllIssues(data.data));
};

const desplayAllIssues = (issues) => {
  const allIssuesContainer = document.getElementById("all-issues-container");
  allIssuesContainer.innerHTML = "";
  issues.forEach((issue) => {
    const borderColor =
      issue.status === "open" ? "border-green-500" : "border-[#A855F7]";
    const div = document.createElement("div");
    div.innerHTML = `
     <div
        class="w-[340px] bg-white rounded-lg shadow-md border-t-4 ${borderColor}"
      >
        <div class="p-5">
          <div class="flex items-start justify-end mb-4">
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
  });
};
loadAllIssues();
