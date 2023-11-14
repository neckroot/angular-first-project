import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { DeletedTaskComponent } from '../deleted-task/deleted-task.component';
import { TaskService } from '../../services/task.service';
import { AsyncPipe, NgFor } from '@angular/common';

@Component({
  selector: 'app-basket-container',
  templateUrl: './basket-container.component.html',
  styleUrl: './basket-container.component.scss',
  standalone: true,
  imports: [DeletedTaskComponent, AsyncPipe, NgFor],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasketContainerComponent {
  private _taskService = inject(TaskService);

  public tasks = this._taskService.basket$;
}
