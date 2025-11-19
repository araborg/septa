export class Task {
	constructor(description) {
		this.description = description;

		this.completed = false;
	}

	toggleComplete() {
		this.completed = !this.completed;
	}
}
