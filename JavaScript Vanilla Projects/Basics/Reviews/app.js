import { reviews } from "./data.js";
//Selection items

const img = document.querySelector(".card-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

let currentItem = 0;

function getRandomNumber() {
  return Math.floor(Math.random() * reviews.length);
}

window.addEventListener("DOMContentLoaded", function () {
  showUser(currentItem);
});

function showUser(user) {
  const item = reviews[user];
  img.src = item.img;
  author.textContent = item.name;
  job.innerText = item.job;
  info.innerText = item.text;
}

nextBtn.addEventListener("click", function () {
  currentItem++;

  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showUser(currentItem);
});

prevBtn.addEventListener("click", function () {
  currentItem--;

  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showUser(currentItem);
});

randomBtn.addEventListener("click", function () {
  currentItem = getRandomNumber();
  showUser(currentItem);
});
