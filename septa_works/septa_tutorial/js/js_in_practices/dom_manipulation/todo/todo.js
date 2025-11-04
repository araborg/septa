function addTask(task) {
	const taskList = document.getElementById("taskList");

	const listItem = document.createElement("li");
	listItem.textContent = task;

	// Add a delete button to each task
	const deleteButton = document.createElement("button");
	deleteButton.textContent = "Delete";

	deleteButton.addEventListener("click", () => {
		taskList.removeChild(listItem);
	});

	// Add a checkbox for task completion
	const checkbox = document.createElement("input");
	checkbox.type = "checkbox";

	checkbox.addEventListener("change", () => {
		if (checkbox.checked) {
			listItem.style.textDecoration = "line-through";
		} else {
			listItem.style.textDecoration = "none";
		}
	});

	listItem.prepend(checkbox);
	listItem.appendChild(deleteButton);
	taskList.appendChild(listItem);
}
