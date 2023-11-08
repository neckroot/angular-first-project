import { provideRouter } from '@angular/router';
import routeConfig from './app/routes';
import {bootstrapApplication} from "@angular/platform-browser";
import {AppComponent} from "./app/app.component";

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routeConfig)
  ],
}).catch((err) => console.error(err));

