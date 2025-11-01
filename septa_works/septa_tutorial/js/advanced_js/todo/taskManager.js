import { Task } from "./task.js";

export class TaskManager {
	constructor() {
		this.tasks = [];
	}

	addTask(description) {
		const task = new Task(description);
		this.tasks.push(task);
	}

	getTasks() {
		return this.tasks;
	}
}
