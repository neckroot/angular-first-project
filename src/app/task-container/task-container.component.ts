import {Component, inject} from '@angular/core';
import {TaskService} from "../task.service";
import {TaskBlockComponent} from "../task-block/task-block.component";
import {NgFor} from "@angular/common";

@Component({
  selector: 'app-task-container',
  standalone: true,
  templateUrl: './task-container.component.html',
  imports: [
    TaskBlockComponent,
    NgFor
  ],
  styleUrls: ['./task-container.component.scss']
})
export class TaskContainerComponent {
  // values:string[] = [];
  private taskService = inject(TaskService);

  values = this.taskService.values;
}
