import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { RentalListComponent } from './features/rental/rental-list/rental-list.component';
import { LessonsComponent } from './features/lessons/lessons.component';
import { TransportComponent } from './features/transport/transport.component';
import { LocationComponent } from './features/location/location.component';

export const routes: Routes = [

  {  path: '',redirectTo: 'home', pathMatch: 'full' },  
  
  { path: 'home', component: HomeComponent   },

  {  path: 'rental', component: RentalListComponent },

  { path: 'lesson', component: LessonsComponent },

  { path: 'transport', component: TransportComponent },

  { path: 'location', component: LocationComponent },

   { path: '**', redirectTo: 'home'  }
];
