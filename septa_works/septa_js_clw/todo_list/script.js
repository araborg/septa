const todoInput = document.getElementById("todoInput");
const addButton = document.getElementById("addButton");

const todoList = document.getElementById("todoList");

// console.log(todoInput, addButton, todoList);

addButton.addEventListener("click", addTask);

function addTask() {
	// if d todoInput value is an empty string do nth
	if (todoInput.value.trim() === "") {
		console.log("Btn clicked");
	}
}
