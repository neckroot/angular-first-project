import {Component, inject} from '@angular/core';
import {TaskService} from "../task.service";
@Component({
  selector: 'app-task-input',
  standalone: true,
  templateUrl: './task-input.component.html',
  styleUrls: ['./task-input.component.scss']
})
export class TaskInputComponent {

  // values:string[] = [];
  private taskService = inject(TaskService);
  pushValue(value: string){
    this.taskService.values.push(value);
    // this.values.push(value);
  }

  log(){
    console.log(this.taskService.values);
  }
}
