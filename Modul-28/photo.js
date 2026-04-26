console.log("Sorosoti MA");
function loadPhoto() {
  const url = "https://jsonplaceholder.typicode.com/photos";
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      //   console.log(data);
      desplayPhoto(data);
    });
}
// loadPhoto();

function desplayPhoto(photos) {
  const photoContainner = document.getElementById("photo-containner");
  photoContainner.innerHTML = "";
  //   console.log(posts);
  photos.forEach((photo) => {
    // console.log(photo);
    const div = document.createElement("div");
    div.innerHTML = `
     <div class="">
        <h1>${photo.title}</h1>
        <img src="${photo.url}" alt="${photo.title}" style="max-width: 100%; height: auto;">  <!-- Display full image -->
        <img src="${photo.thumbnailUrl}" alt="${photo.title} thumbnail" style="max-width: 150px; height: auto;">  <!-- Display thumbnail image -->
        </div>
        `;
    photoContainner.appendChild(div);
  });
}

// <img src="${photo.url}" alt="${photo.url}">
// <img src="${photo.thumbnailUrl}" alt="${photo.thumbnailUrl}">

// function loadPhoto() {
//   const url = "https://jsonplaceholder.typicode.com/photos";
//   fetch(url)
//     .then((res) => res.json())
//     .then((data) => {
//       // console.log(data);
//       displayPhotos(data);
//     });
// }
// // loadPhoto(); // Uncomment if you want to load photos automatically

// function displayPhotos(photos) {
//   const photoContainer = document.getElementById("photo-container");
//   photoContainer.innerHTML = "";
//   // console.log(photos);
//   photos.forEach((photo) => {
//     // console.log(photo);
//     const div = document.createElement("div");
//     div.innerHTML = `
//       <div class="post-card">  <!-- Added class for consistent styling -->
//         <h1>${photo.title}</h1>
//         <img src="${photo.url}" alt="${photo.title}" style="max-width: 100%; height: auto;">  <!-- Display full image -->
//         <img src="${photo.thumbnailUrl}" alt="${photo.title} thumbnail" style="max-width: 150px; height: auto;">  <!-- Display thumbnail image -->
//       </div>
//     `;
//     photoContainer.appendChild(div);
//   });
// }
