function loadPost() {
  const url = "https://jsonplaceholder.typicode.com/posts";
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      // console.log(data)
      desplayPost(data);
    });
}

function desplayPost(posts) {
  const postContainner = document.getElementById("post-containner");
  postContainner.innerHTML = "";
  //   console.log(posts);
  for (let post of posts) {
    // console.log(post.title);
    const div = document.createElement("div");
    div.innerHTML = `
     <div class="post-card">
        <h1>${post.title}</h1>
        <p>
          ${post.body}
        </p>
      </div>
    `;
    postContainner.appendChild(div);
  }
}
// loadPost();

// post.js (assuming this is the file for posts)
// function loadPost() {
//   const url = "https://jsonplaceholder.typicode.com/posts";
//   fetch(url)
//     .then((res) => res.json())
//     .then((data) => {
//       // console.log(data)
//       displayPosts(data);
//     });
// }

// function displayPosts(posts) {
//   const postContainer = document.getElementById("post-container");
//   postContainer.innerHTML = "";
//   // console.log(posts);
//   for (let post of posts) {
//     // console.log(post.title);
//     const div = document.createElement("div");
//     div.innerHTML = `
//       <div class="post-card">
//         <h1>${post.title}</h1>
//         <p>
//           ${post.body}
//         </p>
//       </div>
//     `;
//     postContainer.appendChild(div);
//   }
// }
