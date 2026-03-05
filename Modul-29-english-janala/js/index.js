console.log("Sorosoti Ma");
// fetch api and add dynamic lesson btn
const loadLesson = () => {
  fetch("https://openapi.programming-hero.com/api/levels/all")
    .then((response) => response.json())
    .then((data) => desplayLessons(data.data));
};

const desplayLessons = (lessons) => {
  const lessonContainer = document.getElementById("lesson-container");
  lessonContainer.innerHTML = "";
  for (let lesson of lessons) {
    const div = document.createElement("div");
    div.classList.add("menu", "menu-horizontal", "px-1", "gap-2");
    div.innerHTML = `
        <button id="lesson-btn-${lesson.level_no}" onclick="loadWord(${lesson.level_no})" class="btn btn-outline btn-primary lesson-btn">
              <i class="fa-solid fa-book-open"></i></i>Lesson -${lesson.level_no}
            </button>
        `;
    lessonContainer.appendChild(div);
  }
};

// loading spinner
const toggleSpinner = (isLoading) => {
  if (isLoading == true) {
    document.getElementById("loading-spinner").classList.remove("hidden");
    document.getElementById("word-section").classList.add("hidden");
  } else {
    document.getElementById("loading-spinner").classList.add("hidden");
    document.getElementById("word-section").classList.remove("hidden");
  }
};

// remove Active Class
const removeActiveClass = () => {
  const allBtn = document.getElementsByClassName("lesson-btn");
  for (let btn of allBtn) {
    btn.classList.remove("active");
  }
};

// fetch api and add dynamic lesson card
const loadWord = (id) => {
  toggleSpinner(true);
  removeActiveClass();
  fetch(`https://openapi.programming-hero.com/api/level/${id}`)
    .then((response) => response.json())
    .then((data) => {
      const clickBtn = document.getElementById(`lesson-btn-${id}`); //get lesson btn id
      clickBtn.classList.add("active"); // add active class
      desplayWords(data.data);
    });
};

const desplayWords = (words) => {
  const wordSection = document.getElementById("word-section");
  wordSection.innerHTML = "";
  if (words.length === 0) {
    wordSection.innerHTML = `
    <div class="text-center col-span-full">
        <img src="./assets/alert-error.png" alt="alat" class="mx-auto mb-5" />
        <p class="text-[#79716B] text-[14px] font-normal bangla-font mb-[12px]">
          এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি।
        </p>
        <h2 class="bangla-font text-[34px] font-medium">
          নেক্সট Lesson এ যান
        </h2>
      </div>
    `;
    toggleSpinner(false);
    return;
  }

  for (let word of words) {
    const div = document.createElement("div");
    div.innerHTML = `
        <div class="card bg-base-100 shadow-sm py-5 px-10 m-3 items-center">
            <div class="card-body">
              <h2 class="text-center font-bold text-[32px]">${word.word ? word.word : "শব্দ পাওয়া যায়নি"}</h2>
              <p class="text-center text-[32px]">Meaning /Pronounciation</p>

              <p class="text-center text-[32px]">${word.meaning ? word.meaning : "অর্থ পাওয়া যায়নি"} / ${word.pronunciation ? word.pronunciation : "উচ্চারণ পাওয়া যায়নি"}</p>
              <div class="justify-between flex text-xl">
               <button onclick="loadWordDitale(${word.id})" class="btn bg-[#1A91FF30] hover:bg-[#1A91FF80]"><i class="fa-solid fa-circle-info"></i></button>
                 <button class="btn bg-[#1A91FF30] hover:bg-[#1A91FF80]"><i class="fa-solid fa-volume-high"></i></button>
                
              </div>
            </div>
          </div>
        `;
    wordSection.appendChild(div);
  }
  toggleSpinner(false);
};

// show Modal
const createElement = (arr) => {
  const htmlElement = arr.map(
    (el) =>
      `<span class="px-6 py-3 bg-gray-100 rounded-lg text-gray-700 border">${el}</span>`,
  );
  return htmlElement.join(" ");
};
const loadWordDitale = (id) => {
  fetch(`https://openapi.programming-hero.com/api/word/${id}`)
    .then((response) => response.json())
    .then((data) => {
      // console.log(data);
      displayDitale(data.data);
    });
};

// meaning: "আগ্রহী"
// partsOfSpeech: "adjective"
// points: 1
// pronunciation: "ইগার"
// sentence: "The kids were eager to open their gifts."
// synonyms : (3) ['enthusiastic', 'excited', 'keen']
// word: "Eager"
const displayDitale = (word) => {
  const modalBody = document.getElementById("ditale-containner");
  modalBody.innerHTML = `
  <!-- Title -->
          <h1 class="text-4xl font-bold mb-8">
            ${word.word} (
            <span class="text-black bangla"
              ><i class="fa-solid fa-microphone-lines"></i> :${word.pronunciation}</span
            >
            )
          </h1>

          <!-- Meaning -->
          <h2 class="text-2xl font-semibold mb-2">Meaning</h2>
          <p class="text-lg mb-8 bangla">${word.meaning ? word.meaning : "অর্থ পাওয়া যায়নি"}</p>

          <!-- Example -->
          <h2 class="text-2xl font-semibold mb-2">Example</h2>
          <p class="text-lg text-gray-700 mb-8">
            ${word.sentence ? word.sentence : "উদাহরণ পাওয়া যায়নি"}
          </p>

          <!-- Synonyms -->
          <h2 class="text-2xl font-semibold mb-4 bangla">সমার্থক শব্দ গুলো</h2>

          <div class="flex flex-wrap gap-4 mb-10">
            ${createElement(word.synonyms)}
          </div>

          <!-- Button -->
          <button class="btn btn-primary">Complete Learning</button>
  `;

  document.getElementById("my_modal_5").showModal();
};
loadLesson();
