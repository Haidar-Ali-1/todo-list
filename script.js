const inputBox = document.getElementById("input-box");
const addBtn = document.getElementById("add-btn");
const listContainer = document.getElementById("list-container");

addBtn.addEventListener("click", () => {
  if (inputBox.value === "") {
    alert("Input field is empty");
  } else {
    // create a new list item
    const newListItem = document.createElement("li");
    newListItem.textContent = inputBox.value;
    listContainer.appendChild(newListItem);

    // create the delete element (span)
    const span = document.createElement("span");
    span.innerHTML = "\u00d7";
    newListItem.appendChild(span);

    // empty the input-box after the addition of new task
    inputBox.value = "";
    saveData();
  }
});

// mark as complete or delet task
listContainer.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

// use localStorage to save data
function saveData () {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();