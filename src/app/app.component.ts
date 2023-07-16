import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Task } from './models/task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private messageService: MessageService) {}

  id: number = 0;
  list: Task[] = [];
  taskDescription = '';

  addTask(): void {
    if (this.taskDescription) {
      this.id += 1;
      const taks = new Task(this.id, this.taskDescription);
      this.list.unshift(taks);
      this.taskDescription = '';
    } else {
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'Please enter a task description',
      });
    }
  }

  removeTask(id: number) {
    const indexTask = this.findIndexTaskById(id);
    this.list.splice(indexTask, 1);
  }

  findIndexTaskById(id: number) {
    return this.list.findIndex((task) => task.id === id);
  }

  onCompleteTask(): void {
    this.list.sort((value) => (value.done ? 1 : -1));
  }

  onKeydown(event: KeyboardEvent): void {
    if (event.key === 'Enter') {
      this.addTask();
    }
  }
}
