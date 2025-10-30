const todoInput = document.getElementById("todoInput");
const addButton = document.getElementById("addButton");
const todoList = document.getElementById("todoList");

addButton.addEventListener("click", addTask);

function addTask() {
	if (todoInput.value.trim() === "") return;

	const li = document.createElement("li");
	li.textContent = todoInput.value;

	const deleteButton = document.createElement("button");
	deleteButton.textContent = "Delete";
	deleteButton.addEventListener("click", () => li.remove());

	const completeButton = document.createElement("button");
	completeButton.textContent = "Complete";
	completeButton.addEventListener("click", () =>
		li.classList.toggle("completed")
	);

	li.appendChild(deleteButton);
	li.appendChild(completeButton);
	todoList.appendChild(li);

	todoInput.value = "";
}
