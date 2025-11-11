const todoInput = document.getElementById("todoInput");
const addButton = document.getElementById("addButton");

const todoList = document.getElementById("todoList");

// console.log(todoInput, addButton, todoList);

addButton.addEventListener("click", addTask);

function addTask() {
	console.log("Btn clicked");
}
