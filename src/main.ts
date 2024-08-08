/// <reference types="@angular/localize" />

import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err))
  .then(() => {
    const body = document.querySelector('body');
    if (body) {
      body.classList.add('app-loaded');
    }
  });
