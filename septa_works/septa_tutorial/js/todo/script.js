const todoInput = document.getElementById("todoInput");
const addButton = document.getElementById("addButton");
const todoList = document.getElementById("todoList");

addButton.addEventListener("click", addTask);

function addTask() {
	if (todoInput.value.trim() === "") return;

	// create a li & assign it an input value
	const li = document.createElement("li");
	li.textContent = todoInput.value;

	//
	li.style.listStyle = "none";

	// create a btn & assign it a Delete text
	const deleteButton = document.createElement("button");
	deleteButton.textContent = "Delete";

	// create a btn & assign it a Create text
	const completeButton = document.createElement("button");
	completeButton.textContent = "Complete";

	// use d btn to remove/delete a particular li
	const deleteLI = () => li.remove();
	deleteButton.addEventListener("click", deleteLI);

	// use d btn to toggle(add/remove) completed class
	const toggleClass = () => li.classList.toggle("completed");
	completeButton.addEventListener("click", toggleClass);

	// add/append d btns, li tod ul with id todoList
	li.appendChild(deleteButton);
	li.appendChild(completeButton);
	todoList.appendChild(li);

	// return d input value to empty string
	todoInput.value = "";
}
