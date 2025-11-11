const todoInput = document.getElementById("todoInput");
const addButton = document.getElementById("addButton");

const todoList = document.getElementById("todoList");

// console.log(todoInput, addButton, todoList);

addButton.addEventListener("click", addTask);

function addTask() {
	// if (todoInput.value.trim() === "") {}

	// if d todoInput value is an empty string do nth
	if (!todoInput.value.trim()) return;

	// cr8 a list, li, and update it content
	const li = document.createElement("li");
	li.textContent = todoInput.value;

	// cr8 a btn and update it content
	const deleteBtn = document.createElement("button");
	deleteBtn.textContent = "Delete";

	// cr8 a btn and update it content
	const completeBtn = document.createElement("button");
	completeBtn.textContent = "Complete";

	// add an eventListener to d btns
	deleteBtn.addEventListener("click", () => li.parentNode.removeChild());
	// deleteBtn.addEventListener("click", () => li.remove());

	// add an eventListener
	completeBtn.addEventListener("click", () =>
		li.classList.toggle("completed")
	);
}
