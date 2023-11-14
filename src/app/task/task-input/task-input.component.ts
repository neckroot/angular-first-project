import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task-input',
  templateUrl: './task-input.component.html',
  styleUrls: ['./task-input.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskInputComponent {
  private taskService = inject(TaskService);

  handleInput(input: HTMLInputElement) {
    this.taskService.addTask(input.value!);

    input.value = '';
  }
}
