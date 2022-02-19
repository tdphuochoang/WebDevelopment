const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.querySelector(".btn");
const container = document.querySelector(".container");
const hextText = document.querySelector(".hex-text");

btn.addEventListener("click", function () {
  let hexNum = "#";
  for (i = 0; i < 6; i++) {
    hexNum += hex[randomColor()];
  }

  hextText.textContent = hexNum;
  container.style.background = hexNum;
});

function randomColor() {
  return Math.floor(Math.random() * hex.length);
}
