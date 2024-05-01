import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'configuracion-app',
    loadComponent: () => import('./configuracion-app/configuracion-app.page').then( m => m.ConfiguracionAppPage)
  },
  {
    path: 'gestion-citas',
    loadComponent: () => import('./gestion-citas/gestion-citas.page').then( m => m.GestionCitasPage)
  },
 
];
