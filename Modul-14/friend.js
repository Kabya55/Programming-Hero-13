const myResult = 80;
const friendResult = 39;

if (myResult >= 80) {
  if (friendResult >= 80) {
    console.log("We will get a lunch.");
  } else {
    if (friendResult >= 60) {
      console.log("Good luck next time.");
    } else {
      if (friendResult < 40) {
        console.log("Block your friend.");
      }
    }
  }
} else {
  console.log("Go to home and sleep and act sad.");
}
