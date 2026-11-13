
// Get the HTML elements
let taskInput = document.getElementById("taskInput");
let addButton = document.getElementById("addButton");
let taskList = document.getElementById("taskList");

// Function to add a task
function addTask() {

    // Get the text entered by the user
    let task = taskInput.value;

    // Create a new list item
    let li = document.createElement("li");

    // Put the task inside the list item
    li.textContent = task;

    let deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.type = "button";
    deleteBtn.classList.add("delete-btn");
    li.appendChild(deleteBtn);
    deleteBtn.addEventListener("click",function(){
        li.remove();
    })
    
    // Add the list item to the task list
    taskList.appendChild(li);

    // Clear the input box
    taskInput.value = "";
}
// Detect button click
addButton.addEventListener("click", addTask);
