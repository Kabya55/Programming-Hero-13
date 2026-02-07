function gonoVote(array) {
  if (!Array.isArray(array)) {
    return "Invalid";
  }

  let haCount = 0;
  let naCount = 0;
  for (const arr of array) {
    if (arr === "ha") {
      haCount++;
    } else if (arr === "na") {
      naCount++;
    }
  }

  if (haCount > naCount) {
    return true;
  } else if (haCount == naCount) {
    return "equal";
  } else {
    return false;
  }
}

const votes1 = gonoVote(["ha", "na", "ha", "na"]);
console.log(votes1); // Output: "equal"

const votes2 = gonoVote(["ha", "na", "ha"]);
console.log(votes2); // Output: true

const votes3 = gonoVote(["na", "na", "na"]);
console.log(votes3); // Output: false

// function gonoVote(array) {
//   if (!Array.isArray(array)) {
//     return "Invalid";
//   }

//   let haCount = 0;
//   let naCount = 0;
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] === "ha") {
//       haCount++;
//     } else if (array[i] === "na") {
//       naCount++;
//     }
//   }

//   if (haCount > naCount) {
//     return true;
//   } else if (haCount == naCount) {
//     return "equal";
//   } else {
//     return false;
//   }
// }
