import { MessageService } from 'primeng/api';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from 'src/app/models/task';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent {
  isEditing: boolean = false;
  @Input({ required: true }) task!: Task;
  @Output() removeTask = new EventEmitter<number>();
  @Output() completeTask = new EventEmitter<any>();

  constructor(private messageService: MessageService) {}

  removingTask() {
    this.removeTask.emit(this.task?.id);
  }

  onCompleteTask() {
    this.completeTask.emit();
  }

  completeEditTask() {
    if (!this.task.description) {
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'Please enter a task description',
      });
    } else {
      this.isEditing = false;
    }
  }

  onKeydown(event: KeyboardEvent): void {
    if (event.key === 'Enter') {
      this.completeEditTask();
    }
  }
}
