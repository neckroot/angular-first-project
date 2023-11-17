import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-task-input',
  templateUrl: './task-input.component.html',
  styleUrls: ['./task-input.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskInputComponent {
  private taskService = inject(TaskService);
  private messageService = inject(MessageService);

  handleInput(input: HTMLInputElement) {
    const value = input.value.trim();

    input.value = '';

    if (!value.length) {
      this.messageService.log('You can`t add empty task!', 'error');
      return;
    }

    if (!this.taskService.isUnique(value)) {
      this.messageService.log('You have all ready this task!', 'error');
      return;
    }

    this.taskService.addTask(value);
    this.messageService.log('Task added!', 'success');
  }
}
