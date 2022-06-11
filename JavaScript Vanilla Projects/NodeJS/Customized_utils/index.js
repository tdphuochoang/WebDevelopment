const utils = require("./utils");

const obj = { name: "Hoang", gender: "male", company: "BeaconFire" };
const str = '{"name":"Hoang", "gender": "male", "city":"Tacoma"}';
console.log(utils.ObjectToString(obj));
console.log(typeof utils.ObjectToString(obj));
console.log(utils.StringToObject(str));
console.log(typeof utils.StringToObject(str));
console.log(utils.NumOfDays("Oct 15, 2020", "Oct 10, 2020"));
