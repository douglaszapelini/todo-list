export class Task {
  id: number;
  description: string;
  done: boolean;

  constructor(id: number, description: string, done: boolean = false) {
    this.id = id;
    this.description = description;
    this.done = done;
  }
}
