/*
Help in adding data to table from stackoverflow got from here:
https://stackoverflow.com/questions/20562718/add-data-to-table-using-onclick-function-in-javascript
*/

const submitButton = document.getElementById("submit-data");
const emptyButton = document.getElementById("empty-table");
const table = document.getElementById("table");

submitButton.addEventListener("click", checkName,false);

function checkName(){
  var rows = document.getElementsByTagName()
  
  
  let new_username = document.getElementById("input-username").value;
  let new_email = document.getElementById("input-email").value;
  let new_address = document.getElementById("input-address").value;
  let new_admin = document.getElementById("input-admin").value;
  table.innerHTML += "<tr><td>"+new_username+"</td><td>"+new_email+"</td><td>"+new_address+"</td><td>"+new_admin+"</td></tr>";
}

emptyButton.addEventListener("click", function () {
  table.innerHTML = "";
});
