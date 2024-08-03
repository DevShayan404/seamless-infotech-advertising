import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'test',
    loadComponent: () =>
      import('./components/navbar/navbar.component').then(
        (c) => c.NavbarComponent
      ),
  },
];
