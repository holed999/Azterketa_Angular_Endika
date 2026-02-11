import { Routes } from '@angular/router';
import { NavBar } from './nav-bar/nav-bar';
import { AirStations } from './air-stations/air-stations';
import { Station } from './station/station';
import { Events } from './events/events';
import { Euskalmet } from './euskalmet/euskalmet';

export const routes: Routes = [
    
  {
    path: 'air_stations',
    component: AirStations
  },
   {
    path: 'air_stations/:id',
    component: Station
  },
   {
    path: 'cultural_events',
    component: Events
  },
   {
    path: 'euskalmet',
    component: Euskalmet
  },
  {
    path: '',
    redirectTo: 'air_stations',
    pathMatch: 'full'
  }
    
];

