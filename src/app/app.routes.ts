import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';

export const routes: Routes = [

    { 
        path: '', 
        component: HomeComponent 
      },

      { 
        path: 'rental', 
        loadComponent: () => import('./features/rental/rental-list/rental-list.component').then(m => m.RentalListComponent)
      },

      { 
        path: '**', 
        redirectTo: '' 
      }
];
