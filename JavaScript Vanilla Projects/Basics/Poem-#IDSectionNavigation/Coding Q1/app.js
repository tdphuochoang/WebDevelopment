/*Methods using fetch*/
let table = document.getElementById("table");
let url = "https://jsonplaceholder.typicode.com/users";
fetch(url).then((res) =>
  res
    .json()
    .then((data) => {
      console.log(data);
      if (data.length > 0) {
        var temp = "";

        data.forEach((item) => {
          temp += "<tr>";
          temp += "<td>" + item.name + "</td>";
          temp += "<td>" + item.id + "</td>";
          temp += "<td>" + item.username + "</td>";
          temp += "<td>" + item.email + "</td>";
          temp += `<td> ${item.address.street} ,  ${item.address.suite}, ${item.address.city}, ${item.address.zipcode}. </td>`;
          temp += "<td>" + item.phone + "</td>";
          temp += "<td>" + item.website + "</td>";
          temp += `<td> ${item.company.name} ,  ${item.company.catchPhrase}, ${item.company.bs}. </td>`;
        });
        document.getElementById("data").innerHTML = temp;
      }
    })
    .catch((error) => console.log(error))
);

/*Method using XHR*/
//Please uncomment the below code and execute

// let url = "https://jsonplaceholder.typicode.com/users";
// const xhr = new XMLHttpRequest();
// xhr.open("GET", url);
// xhr.send();
// xhr.onload = function () {
//   if (xhr.status != 200) {
//     console.log(`Error ${xhr.status}`);
//   } else {
//     let data = JSON.parse(xhr.response);
//     console.log(data);
//     if (data.length > 0) {
//       var temp = "";
//       data.forEach((item) => {
//         temp += "<tr>";
//         temp += "<td>" + item.name + "</td>";
//         temp += "<td>" + item.id + "</td>";
//         temp += "<td>" + item.username + "</td>";
//         temp += "<td>" + item.email + "</td>";
//         temp += `<td> ${item.address.street} ,  ${item.address.suite}, ${item.address.city}, ${item.address.zipcode}. </td>`;
//         temp += "<td>" + item.phone + "</td>";
//         temp += "<td>" + item.website + "</td>";
//         temp += `<td> ${item.company.name} ,  ${item.company.catchPhrase}, ${item.company.bs}. </td>`;
//       });
//       document.getElementById("data").innerHTML = temp;
//     }
//   }
// };
// xhr.onerror = function () {
//   console.log("Request failed");
// };
