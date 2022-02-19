var slide = document.querySelector(".slides");
var radios = slide.getElementsByTagName("input");

var counter = 1;
boba = ["radio1", "radio2", "radio3", "radio4"];

function setAutoSlide() {
  var temp = setInterval(function () {
    document.getElementById("radio" + counter).checked = true;

    counter++;

    if (counter > 4) {
      counter = 1;
    }
  }, 3000);

  window.addEventListener("click", function (e) {
    radio = e.srcElement.id;
    for (i = 0; i < boba.length; i += 1) {
      if (boba[i] == e.srcElement.id) {
        radio = boba[i];

        counter = radio[5];
      }
    }
  });
}

setAutoSlide();
