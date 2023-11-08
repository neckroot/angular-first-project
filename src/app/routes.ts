import { Routes } from '@angular/router';
import {TaskListComponent} from "./task-list/task-list.component";

const routeConfig: Routes = [
  {
    path: "",
    component: TaskListComponent,
    title: "To Do List"

  },
  {
    path: "basket",
    loadComponent: () => import('./basket/basket.component'),
    title: 'Basket'
  }
];

export default routeConfig;
