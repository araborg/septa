const task = document.getElementById("task");
const addTaskBtn = document.getElementById("addTask");

const outputTasksContainer = document.getElementById("output");

addTaskBtn.addEventListener("click", addTask);

function addTask(e) {
	e.preventDefault();

	const inputValue = task.value;

	// if inputValue is an empty string, do noth
	if (!inputValue.trim()) return;

	// cr8 li with content
	const li = document.createElement("li");
	li.textContent = `${inputValue}`;
	li.classList.add("list");

	// cr8 btns with content
	const deleteBtn = document.createElement("button");
	deleteBtn.textContent = "Delete";

	const completeBtn = document.createElement("button");
	completeBtn.textContent = "Completed";

	// add addEventListeners to d btns
	deleteBtn.addEventListener("click", () => li.parentNode.removeChild(li));

	completeBtn.addEventListener("click", () =>
		li.classList.toggle("completed")
	);

	// append li and btns
	li.appendChild(deleteBtn);
	li.appendChild(completeBtn);
	outputTasksContainer.appendChild(li);

	task.value = "";
}
