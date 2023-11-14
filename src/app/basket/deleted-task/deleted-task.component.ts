import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-deleted-task',
  standalone: true,
  templateUrl: './deleted-task.component.html',
  styleUrls: ['./deleted-task.component.scss'],
})
export class DeletedTaskComponent {
  @Input() task!: string;
  @Input() i!: number;
}
