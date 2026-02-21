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
