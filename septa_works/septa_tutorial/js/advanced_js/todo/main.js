import { TaskManager } from "./taskManager.js";

const taskManager = new TaskManager();

document.getElementById("addTask").addEventListener("click", () => {
	const taskDescription = document.getElementById("taskDescription").value;

	taskManager.addTask(taskDescription);

	displayTasks();
});

function displayTasks() {
	const tasks = taskManager.getTasks();

	const taskList = document.getElementById("taskList");

	taskList.innerHTML = "";

	tasks.forEach((task, index) => {
		const listItem = document.createElement("li");

		listItem.textContent = `${task.description} - ${
			task.completed ? "Completed" : "Not Completed"
		}`;

		listItem.addEventListener("click", () => {
			task.toggleComplete();

			displayTasks();
		});

		taskList.appendChild(listItem);
	});
}
