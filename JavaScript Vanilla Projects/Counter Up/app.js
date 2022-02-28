var listCounter = document.querySelectorAll(".counter");

const axios = require("axios").default;

axios
  .get("https://www.instagram.com/nhiyt/?__a=1")
  .then((res) => {
    console.log(
      "res=" + JSON.stringify(res.data.graphql.user.edge_followed_by.count)
    );
  })
  .catch((err) => {
    console.log("error:\n" + err);
  })
  .finally(() => console.log("end"));

function count(el) {
  var numberEl = el.querySelector(".number");
  var to = parseInt(numberEl.innerText);
  var count = 0;
  var time = 200;
  var step = to / time;

  let counting = setInterval(() => {
    count += step;

    if (count > to) {
      clearInterval(counting);
      numberEl.innerText = to;
    } else {
      numberEl.innerText = Math.round(count);
    }
  }, 1);
}

listCounter.forEach((item) => {
  count(item);
});
