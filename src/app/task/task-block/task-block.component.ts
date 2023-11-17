import {
  ChangeDetectionStrategy,
  Component,
  inject,
  Input,
} from '@angular/core';
import { TaskService } from '../../services/task.service';
import { UpperCasePipe } from '@angular/common';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-task-block',
  templateUrl: './task-block.component.html',
  styleUrls: ['./task-block.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [UpperCasePipe],
})
export class TaskBlockComponent {
  @Input() task!: string;
  @Input() id!: number;

  private _taskService = inject(TaskService);
  private _messageService = inject(MessageService);

  deleteTask() {
    this._taskService.deleteTaskById(this.id);
    this._messageService.log('Task deleted!', 'error');
  }
}
