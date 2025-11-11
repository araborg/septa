const task = document.getElementById("task");
const addTaskBtn = document.getElementById("addTask");

const outputTasks = document.getElementById("output");

addTaskBtn.addEventListener("click", addTask);

function addTask() {
	const inputValue = task.value;

	// if inputValue is an empty string, do noth
	if (!inputValue.trim()) return;

	const li = document.createElement("li");
	li.textContent = `${inputValue}`;

	const deleteBtn = document.createElement("button");
	deleteBtn.textContent = "Delete";

	const completeBtn = document.createElement("button");
	completeBtn.textContent = "Completed";

	console.log(li);

	// console.log(task.value);
	task.value = "";
}
