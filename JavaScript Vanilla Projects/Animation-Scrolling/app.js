var animationElements = document.querySelectorAll(".show-on-scroll");

function toggleAnimationElInWindow(element) {
  var heightScreen = window.innerHeight;
  var rect = element.getClientRects()[0];

  //Check to see if rectH1 is in the screen
  if (!(rect.bottom < 0 || rect.top > heightScreen)) {
    element.classList.add("start");
  } else {
    element.classList.remove("start");
  }
}

function checkAnimation() {
  animationElements.forEach((el) => {
    toggleAnimationElInWindow(el);
  });
}

window.onscroll = checkAnimation;
