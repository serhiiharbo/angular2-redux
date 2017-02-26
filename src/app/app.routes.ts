import { Routes } from '@angular/router';
import { HomeComponent } from './home';
import { AboutComponent } from './about';
import { NoContentComponent } from './no-content';

import { DataResolver } from './app.resolver';

export const ROUTES: Routes = [
  { path: '',  component: HomeComponent },
  { path: 'patient-info',  loadChildren: './+patient-info#PatientInfoModule'},
  { path: 'clinical-info', loadChildren: './+clinical-info#ClinicalInfoModule'},
  { path: 'about', component: AboutComponent },
  { path: '**',    component: NoContentComponent },
];
