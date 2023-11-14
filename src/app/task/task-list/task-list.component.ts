import { Component } from '@angular/core';
import { TaskInputComponent } from '../task-input/task-input.component';
import { TaskContainerComponent } from '../task-container/task-container.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-task-list',
  standalone: true,
  templateUrl: './task-list.component.html',
  imports: [TaskInputComponent, TaskContainerComponent, RouterLink],
  styleUrls: ['./task-list.component.scss'],
})
export class TaskListComponent {}
