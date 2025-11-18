import { Task } from "./task.js";

export class TaskManger {
	constructor() {
		this.tasks = [];
	}

	addTask(description) {
		const task = new Task(description);

		this.tasks.push(task);
	}
}
