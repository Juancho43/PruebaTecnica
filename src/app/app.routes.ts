import { Routes } from '@angular/router';
import {authGuard} from './core/services/util/auth.guard';
import {unauthenticatedGuard} from './core/services/util/unauthenticated.guard';

export const routes: Routes = [
  {
    path:'login',
    canActivate:[unauthenticatedGuard],
    loadComponent: () => import('../app/components/auth/login-form/login-form'),
  },
  {
    path:'register',
    loadComponent: () => import('../app/components/auth/register-form/register-form'),
  },
  {
    path: 'hardware',
    loadComponent: () => import('../app/components/hardware/page-hardware/page-hardware'),
    children:[
      {
        path: 'new',
        loadComponent: () => import('../app/components/hardware/new-hardware/new-hardware'),
        canActivate: [authGuard],
      },
      {
        path: 'edit/:slug',
        canActivate: [authGuard],
        loadComponent: () => import('../app/components/hardware/edit-hardware/edit-hardware.component')
      },
      {
        path:'delete/:slug',
        canActivate: [authGuard],
        loadComponent: () => import('../app/components/hardware/delete-hardware/delete-hardware')
      }
    ]
  }
];
