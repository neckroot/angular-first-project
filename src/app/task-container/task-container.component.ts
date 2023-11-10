import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TaskService } from '../task.service';
import { TaskBlockComponent } from '../task-block/task-block.component';
import { AsyncPipe, NgFor } from '@angular/common';

@Component({
  selector: 'app-task-container',
  templateUrl: './task-container.component.html',
  styleUrls: ['./task-container.component.scss'],
  standalone: true,
  imports: [TaskBlockComponent, NgFor, AsyncPipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskContainerComponent {
  private _taskService = inject(TaskService);
  public values = this._taskService.tasks$;
}
