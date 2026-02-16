//  OPtion 1
function makeYellow() {
  document.body.style.backgroundColor = "yellow";
}

function makeRead() {
  document.body.style.backgroundColor = "red";
}

function purple() {
  document.body.style.backgroundColor = "purple";
}

// Option 2
const btnTomato = document.getElementById("btn-tomato");
btnTomato.onclick = function () {
  document.body.style.backgroundColor = "tomato";
};

const btnPink = document.getElementById("btn-pink");
btnPink.onclick = function () {
  document.body.style.backgroundColor = "pink";
};

// Option 3 Most used
// Event Listener

document.getElementById("btn-green").addEventListener("click", function () {
  document.body.style.backgroundColor = "green";
});

document.getElementById("btn-plum").addEventListener("click", function () {
  document.body.style.backgroundColor = "plum";
});
