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


//   /// <reference types="@angular/localize" />

// import { bootstrapApplication } from '@angular/platform-browser';
// import { appConfig } from './app/app.config';
// import { AppComponent } from './app/app.component';

// const MINIMUM_LOADING_TIME = 2000; // Minimum loader display time in milliseconds
// const startTime = Date.now();

// bootstrapApplication(AppComponent, appConfig)
//   .catch((err) => console.error(err))
//   .then(() => {
//     const body = document.querySelector('body');
//     if (body) {
//       window.addEventListener('load', () => {
//         const elapsedTime = Date.now() - startTime;
//         const remainingTime = MINIMUM_LOADING_TIME - elapsedTime;

//         setTimeout(() => {
//           body.classList.add('app-loaded');
//         }, Math.max(remainingTime, 0));
//       });
//     }
//   });
