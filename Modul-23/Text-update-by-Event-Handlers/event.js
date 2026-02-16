console.log("Sorosoti Ma");

document.getElementById("change-text").addEventListener("click", function () {
  //   console.log("Click");
  const pageTitle = document.getElementById("page-title");
  pageTitle.innerText = "Update Event Handlear";
});

document.getElementById("change-text2").addEventListener("click", function () {
  const pageTitle2 = document.getElementById("page-title2");
  pageTitle2.innerText = "Update Event Handlear 2";
});
