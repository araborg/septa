const todoInput = document.getElementById("todoInput");
const addButton = document.getElementById("addButton");
const todoList = document.getElementById("todoList");

addButton.addEventListener("click", addTask);

function addTask() {
	if (todoInput.value.trim() === "") return;

	// create a li & assign it an input value
	const li = document.createElement("li");
	li.textContent = todoInput.value;

	const deleteButton = document.createElement("button");
	deleteButton.textContent = "Delete";

	const deleteLI = () => li.remove();
	deleteButton.addEventListener("click", deleteLI);

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
