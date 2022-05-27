let table = document.getElementById("table");

const add_item = () => {
  let new_name = document.getElementById("name").value;
  let new_category = document.getElementById("category").value;
  let new_price = document.getElementById("price").value;

  let newItem = document.createElement("tr");
  newItem.classList.add("row");
  newItem.innerHTML = `<td>${new_name}</td>
          <td>${new_category}</td>
          <td>${new_price}</td>
          <td>
            <input
              type="button"
              value="Delete"
              class="delete"
            />
          </td>`;
  table.appendChild(newItem);
  document.getElementById("name").value = "";
  document.getElementById("category").value = "";
  document.getElementById("price").value = "";
};

table.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.parentElement.remove();
  }
});
