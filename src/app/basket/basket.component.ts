import { Component } from '@angular/core';
import { Location } from '@angular/common';
import {RouterLink} from "@angular/router";
import {DeletedTaskComponent} from "../deleted-task/deleted-task.component";

@Component({
  selector: 'app-basket',
  standalone: true,
  templateUrl: './basket.component.html',
  imports: [
    RouterLink,
    DeletedTaskComponent
  ],
  styleUrls: ['./basket.component.scss']
})
export default class BasketComponent {

  constructor(private location: Location) {
  }
  goBack(){
    this.location.back();
  }
}
