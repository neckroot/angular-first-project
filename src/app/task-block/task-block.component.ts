import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-task-block',
  standalone: true,
  templateUrl: './task-block.component.html',
  styleUrls: ['./task-block.component.scss']
})
export class TaskBlockComponent {

  @Input() task!: string;
}
