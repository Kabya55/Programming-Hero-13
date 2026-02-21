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
}
