import {
  ChangeDetectionStrategy,
  Component,
  inject,
  Input,
} from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-block',
  templateUrl: './task-block.component.html',
  styleUrls: ['./task-block.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskBlockComponent {
  @Input() task!: string;
  @Input() id!: number;

  private _taskService = inject(TaskService);

  deleteTask() {
    this._taskService.deleteTaskById(this.id);
    console.log(this.id);
  }
}
