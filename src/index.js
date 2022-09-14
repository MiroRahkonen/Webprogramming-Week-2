/*
Help in adding data to table from stackoverflow got from here:
https://stackoverflow.com/questions/20562718/add-data-to-table-using-onclick-function-in-javascript
*/

const submitButton = document.getElementById("submit-data");
const emptyButton = document.getElementById("empty-table");
const table = document.getElementById("table");

submitButton.addEventListener("click", addUser, false);

function addUser(event) {
  event.preventDefault();
  let images = document.getElementById("input-image");
  let newImage = images.files[0];
  let newUsername = document.getElementById("input-username").value;
  let newEmail = document.getElementById("input-email").value;
  let newAddress = document.getElementById("input-address").value;
  let newAdmin = document.getElementById("input-admin").value;

  let rows = document.getElementById("table").querySelectorAll("tr");
  for(row in rows){
    let oldUsername = row.firstChild.innerHTML;
    if(newUsername == oldUsername){
      row.innerHTML = table.innerHTML+="<tr><td>"+newUsername+"</td><td>"+newEmail+
      "</td><td>"+newAddress+"</td><td>"+newAdmin+"</td><td>"+
      `<img src=${URL.createObjectURL(newImage)} height="64" width="64"></td></tr>`;
    }
    else{
      table.innerHTML+="<tr><td>"+newUsername+"</td><td>"+newEmail+
      "</td><td>"+newAddress+"</td><td>"+newAdmin+"</td><td>"+
      `<img src=${URL.createObjectURL(newImage)} height="64" width="64"></td></tr>`;
    }
  }  
}

  table.innerHTML+="<tr><td>"+newUsername+"</td><td>"+newEmail+
  "</td><td>"+newAddress+"</td><td>"+newAdmin+"</td><td>"+
  `<img src=${URL.createObjectURL(newImage)} height="64" width="64"></td></tr>`;}

emptyButton.addEventListener("click", function () {
  table.innerHTML = "";
});
