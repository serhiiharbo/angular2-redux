import { PatientInfoComponent } from './patient-info.component';

export const routes = [
  { path: '', children: [
    { path: '', component: PatientInfoComponent },
    { path: 'add-patient', loadChildren: './+add-patient#AddPatientModule' }
  ]},
];
