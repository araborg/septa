/*

const math = require("./math");

console.log(math.add(2, 3));


import { add, PI } from "./math";

console.log(add(2, 3));

import * as math from "./math";
*/

import { TaskManger } from "./taskManager.js";

const taskManager = new TaskManger();

const addTaskBtn = document.getElementById("addTask");

addTaskBtn.addEventListener("click", () => {
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
