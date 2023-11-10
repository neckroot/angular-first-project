import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-input',
  templateUrl: './task-input.component.html',
  styleUrls: ['./task-input.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskInputComponent {
  private taskService = inject(TaskService);

  pushValue(task: string) {
    this.taskService.addTask(task);
  }

  log() {
    this.taskService.tasks$.subscribe((tasks) => console.log(tasks));
  }
}
