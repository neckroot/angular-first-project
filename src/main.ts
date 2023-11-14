import { provideRouter } from '@angular/router';
import routeConfig from './app/routes/routes';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/main/app.component';

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routeConfig)],
}).catch((err) => console.error(err));
