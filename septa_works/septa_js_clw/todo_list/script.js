const todoInput = document.getElementById("todoInput");
const addButton = document.getElementById("addButton");

const todoList = document.getElementById("todoList");

// console.log(todoInput, addButton, todoList);

addButton.addEventListener("click", addTask);

function addTask() {
	// if (todoInput.value.trim() === "") {}

	// if d todoInput value is an empty string do nth
	if (!todoInput.value.trim()) return;

	// cr8 an list, li and update it content
	const li = document.createElement("li");
	li.textContent = todoInput.value;
}
