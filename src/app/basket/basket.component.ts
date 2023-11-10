import { Component, inject } from '@angular/core';
import { AsyncPipe, Location, NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
import { DeletedTaskComponent } from '../deleted-task/deleted-task.component';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss'],
  standalone: true,
  imports: [RouterLink, DeletedTaskComponent, NgFor, AsyncPipe],
})
export default class BasketComponent {
  private _taskService = inject(TaskService);

  public tasks = this._taskService.basket$;

  constructor(private _location: Location) {}

  goBack() {
    this._location.back();
  }
}
