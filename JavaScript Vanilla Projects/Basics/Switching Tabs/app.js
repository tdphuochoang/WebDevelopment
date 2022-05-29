const display_city = (city) => {
  let content = document.getElementsByClassName("content");
  for (let i = 0; i < content.length; i++) {
    content[i].style.display = "none";
  }
  document.getElementById(city).style.display = "block";
};
