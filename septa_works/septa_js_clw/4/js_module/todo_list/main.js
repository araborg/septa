/*

const math = require("./math");

console.log(math.add(2, 3));


import { add, PI } from "./math";

console.log(add(2, 3));

import * as math from "./math";
*/

import { TaskManger } from "./taskManager.js";

// taskManager has both addTask and getTasks methods
const taskManager = new TaskManger();

// ===== add event to input btn =====

const addTaskBtn = document.getElementById("addTask");

addTaskBtn.addEventListener("click", handleClick);

function handleClick() {
	// get input value
	const taskDescription = document.getElementById("taskDescription").value;

	// cr8 new task
	taskManager.addTask(taskDescription);

	// display UI
	displayTasks();
}

// ===== cr8 a list item & add it to ul =====

function displayTasks() {
	// task container, ul
	const taskList = document.getElementById("taskList");

	/* return to empty string on each btn click 
    b4 loading tasks afresh */
	taskList.innerHTML = "";

	// retrieve d tasks
	const tasks = taskManager.getTasks();

	tasks.forEach((task) => {
		// cr8 an li
		const listItem = document.createElement("li");

		/* textContent was used for li while innerHTML
        was used for ul */

		listItem.textContent =
			//
			`${task.description} - ${
				task.completed ? "Completed" : "Not Completed"
			}`;

		listItem.addEventListener("click", () => {
			task.toggleComplete();

			// d fxn is called inside of itself
			displayTasks();
		});

		taskList.appendChild(listItem);
	});
}
