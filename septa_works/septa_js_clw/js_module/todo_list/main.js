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
	// get input value
	const taskDescription = document.getElementById("taskDescription").value;

	taskManager.addTask(taskDescription);

	displayTasks();
});

function displayTasks() {
	// task container, ul
	const taskList = document.getElementById("taskList");

	const tasks = taskManager.getTasks();

	/* return to empty string on each btn click 
     b4 loading tasks afresh */
	taskList.innerHTML = "";

	tasks.forEach((task, index) => {
		// cr8 an li
		const listItem = document.createElement("li");

		listItem.textContent =
			//
			`${task.description} - 
            
            ${task.completed ? "Completed" : "Not Completed"}`;

		listItem.addEventListener("click", () => {
			task.toggleComplete();

			console.log("clicked");

			// d fxn is called inside of itself
			displayTasks();
		});

		taskList.appendChild(listItem);
	});
}
