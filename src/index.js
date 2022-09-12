/*
Help in adding data to table from stackoverflow got from here:
https://stackoverflow.com/questions/20562718/add-data-to-table-using-onclick-function-in-javascript
*/

const submitButton = document.getElementById("submit-data");
const emptyButton = document.getElementById("empty-table");
const table = document.getElementById("table");

submitButton.addEventListener("click", function () {
  let username = document.getElementById("input-username").value;
  let email = document.getElementById("input-email").value;
  let address = document.getElementById("input-address").value;
  let admin = document.getElementById("input-admin").value;
  table.innerHTML += "<tr><td>"+username+"</td><td>"+email+"</td><td>"+address+"</td><td>"+admin+"</td></tr>";
});

emptyButton.addEventListener("click", function () {
  table.innerHTML = "";
});
