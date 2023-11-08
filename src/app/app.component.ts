import {Component} from '@angular/core';
import { MessageComponent } from "./message/message.component";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [
    MessageComponent,
    RouterOutlet,
  ],
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

}
