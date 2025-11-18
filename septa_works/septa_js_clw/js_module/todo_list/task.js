export class Task {
	constructor(description) {
		this.description = description;

		this.isCompleted = false;
	}

	toggleComplete() {
		this.completed = !this.isCompleted;
	}
}
