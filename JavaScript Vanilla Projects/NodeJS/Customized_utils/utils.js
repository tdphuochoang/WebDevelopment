//Convert an object to a string
const ObjectToString = (obj) => JSON.stringify(obj);

//Convert a string to an object
const StringToObject = (str) => JSON.parse(str);

const NumOfDays = (date1, date2) => {
  let day = "";
  let month = "";
  let year = "";

  const months = {
    Jan: 01,
    Feb: 02,
    Mar: 03,
    Apr: 04,
    May: 05,
    Jun: 06,
    Jul: 07,
    Aug: 08,
    Sep: 09,
    Oct: 10,
    Nov: 11,
    Dec: 12,
  };

  //Reformat each date to "YYYY-MM-DD" format
  const Reformat = (arr) => {
    arr.forEach((e) => {
      if (e > 1000) {
        year = e;
      } else if (months[e]) {
        month = months[e];
        if (month < 10) {
          month = "0" + String(month);
        }
      } else {
        day = e;
        if (day < 10) {
          day = String(day);
          day = "0" + day;
        }
      }
    });
    return [year, month, day].join("-");
  };

  //Remove all "," from the date
  date1 = date1.replaceAll(",", "").split(" ");
  date2 = date2.replaceAll(",", "").split(" ");
  const my_arr = [date1, date2];
  let final_arr = [];
  my_arr.forEach((item) => {
    let reformat_item = Reformat(item);
    final_arr.push(reformat_item);
  });

  //One day in milliseconds
  const oneDay = 1000 * 60 * 60 * 24;

  //Calculate the time difference between 2 dates
  const TimeDifference =
    new Date(final_arr[0]).getTime() - new Date(final_arr[1]).getTime();

  return Math.abs(Math.round(TimeDifference / oneDay));
};

module.exports = {
  ObjectToString,
  StringToObject,
  NumOfDays,
};
