/*
Help in adding data to table from stackoverflow got from here:
https://stackoverflow.com/questions/20562718/add-data-to-table-using-onclick-function-in-javascript
*/

const submitButton = document.getElementById("submit-data")
const emptyButton = document.getElementById("empty-table")
const table = document.getElementById("table")

submitButton.addEventListener("click", addUser, false)

function addUser(event) {
  event.preventDefault()
  let images = document.getElementById("input-image")
  let newImage = images.files[0]
  let newImagesrc
  if (!newImage) {
    newImagesrc = ""
  } else {
    newImagesrc = URL.createObjectURL(newImage)
  }

  let newUsername = document.getElementById("input-username").value
  let newEmail = document.getElementById("input-email").value
  let newAddress = document.getElementById("input-address").value
  let newAdmin = document.getElementById("input-admin")
  if (newAdmin.checked) {
    newAdmin = "X"
  } else {
    newAdmin = "-"
  }

  let table = document.getElementById("table")
  let tableLength = table.rows.length
  console.log(table.rows[0].cells[0].innerHTML)
  console.log(table.rows.length)
  for (let i = 0; i < tableLength; i++) {
    let oldUsername = table.rows[i].cells[0].innerHTML
    console.log(oldUsername)
    if (oldUsername) {
      if (newUsername === oldUsername) {
        table.rows[i].innerHTML =
          "<tr><td id='username'>" +
          oldUsername +
          "</td><td>" +
          newEmail +
          "</td><td>" +
          newAddress +
          "</td><td>" +
          newAdmin +
          "</td><td>" +
          `<img src=${newImagesrc} height="64" width="64"></td></tr>`

        return
      }
    }
  }
  table.innerHTML +=
    "<tr><td id='username'>" +
    newUsername +
    "</td><td>" +
    newEmail +
    "</td><td>" +
    newAddress +
    "</td><td>" +
    newAdmin +
    "</td><td>" +
    `<img src=${newImagesrc} height="64" width="64"></td></tr>`
}

emptyButton.addEventListener("click", function () {
  table.innerHTML = ""
})
