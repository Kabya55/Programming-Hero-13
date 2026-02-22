let jobs = [];

const total = document.getElementById("total");
const interviews = document.getElementById("interviews");
const rejecteds = document.getElementById("rejecteds");
const availableJobs = document.getElementById("availableJobs");

const allCardsContainer = document.getElementById("all-cards");
const filterSection = document.getElementById("filterSection");

const allJobsBtn = document.getElementById("allJobsBtn");
const interviewJobsBtn = document.getElementById("interviewJobsBtn");
const rejectedJobsBtn = document.getElementById("rejectedJobsBtn");

const cards = allCardsContainer.querySelectorAll(".card");

cards.forEach((card) => {
  jobs.push({
    element: card,
    companyName: card.querySelector(".companyName").innerText,
    status: "All",
  });
  masin();
});

// TAB TOGGLE
function toggleStyle(id) {
  [allJobsBtn, interviewJobsBtn, rejectedJobsBtn].forEach((btn) => {
    btn.classList.remove("bg-blue-600", "text-white");
    btn.classList.add("bg-gray-200", "text-gray-700");
  });

  const selected = document.getElementById(id);
  selected.classList.remove("bg-gray-200", "text-gray-700");
  selected.classList.add("bg-blue-600", "text-white");
  masin();
}
// Update ui
function updateStatusUI(cardElement, status) {
  const statusSpan = cardElement.querySelector(".status");

  if (status === "Interview") {
    statusSpan.innerText = "Interview";
    statusSpan.className =
      "status inline-block bg-green-200 text-green-700 text-xs px-3 py-1 rounded mt-3";
  }

  if (status === "Rejected") {
    statusSpan.innerText = "Rejected";
    statusSpan.className =
      "status inline-block bg-red-200 text-red-700 text-xs px-3 py-1 rounded mt-3";
  }
}

// CLICK

document.querySelector("main").addEventListener("click", function (e) {
  const cardElement = e.target.closest(".card");
  if (!cardElement) return;

  const job = jobs.find((j) => j.element === cardElement);
  if (!job) return;

  // INTERVIEW CLICK
  if (e.target.classList.contains("interview-btn")) {
    job.status = "Interview";
    updateStatusUI(cardElement, "Interview");
  }

  // REJECTED CLICK
  if (e.target.classList.contains("rejected-btn")) {
    job.status = "Rejected";
    updateStatusUI(cardElement, "Rejected");
  }

  // DELETE CLICK
  if (e.target.closest(".delete-btn")) {
    jobs = jobs.filter((j) => j !== job);
    cardElement.remove();
  }
  masin();
});

// Calculate and Emty SMS
function masin() {
  let interviewCount = 0;
  let rejectedCount = 0;

  let activeTab = "All";

  if (interviewJobsBtn.classList.contains("bg-blue-600")) {
    activeTab = "Interview";
  }
  if (rejectedJobsBtn.classList.contains("bg-blue-600")) {
    activeTab = "Rejected";
  }

  jobs.forEach((job) => {
    if (job.status === "Interview") interviewCount++;
    if (job.status === "Rejected") rejectedCount++;

    if (activeTab === "All") {
      job.element.style.display = "block";
    }

    if (activeTab === "Interview") {
      if (job.status === "Interview") {
        job.element.style.display = "block";
      } else {
        job.element.style.display = "none";
      }
    }

    if (activeTab === "Rejected") {
      if (job.status === "Rejected") {
        job.element.style.display = "block";
      } else {
        job.element.style.display = "none";
      }
    }
  });

  // Empty message
  if (
    (activeTab === "Interview" && interviewCount === 0) ||
    (activeTab === "Rejected" && rejectedCount === 0) ||
    (activeTab === "All" && jobs.length === 0)
  ) {
    filterSection.innerHTML = `
      <div class="text-center py-10">
      <img class="mx-auto m-4" src="./img/noAvailable.png" alt="" />
        <h3 class="text-xl font-semibold text-gray-700">No Jobs Available</h3>
        <p class="text-gray-500 mt-2">Check back soon for new job opportunities.</p>
      </div>
    `;
    filterSection.classList.remove("hidden");
    allCardsContainer.classList.add("hidden");
  } else {
    filterSection.innerHTML = "";
    filterSection.classList.add("hidden");
    allCardsContainer.classList.remove("hidden");
  }

  total.innerText = jobs.length;
  interviews.innerText = interviewCount;
  rejecteds.innerText = rejectedCount;

  if (activeTab === "All") {
    availableJobs.innerText = jobs.length;
  }
  if (activeTab === "Interview") {
    availableJobs.innerText = interviewCount + ` of ` + jobs.length;
  }
  if (activeTab === "Rejected") {
    availableJobs.innerText = rejectedCount + ` of ` + jobs.length;
  }
}
