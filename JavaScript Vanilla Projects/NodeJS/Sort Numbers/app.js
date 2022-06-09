const fs = require("fs");

let str = "";

//Get a string of 100 random numbers and return it
function randomNumberGenerator(str) {
  Array.from(Array(100)).forEach((item) => {
    let random_num = Math.ceil(Math.random() * 100) + " ";
    str = str + random_num;
  });
  return str;
}

try {
  const data = fs.writeFileSync("file.txt", randomNumberGenerator(str));
  fs.readFile("file.txt", "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    let sort_data = data
      .trim()
      .split(" ")
      .sort((a, b) => a - b)
      .toString();
    try {
      const data = fs.writeFileSync("file.txt", sort_data);
    } catch (err) {
      console.error(err);
    }
  });
} catch (err) {
  console.error(err);
}
