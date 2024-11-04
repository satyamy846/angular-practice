import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(), // to access http calls with angular services
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes)
  ]
};
