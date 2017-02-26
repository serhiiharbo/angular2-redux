import { ClinicalInfoComponent } from './clinical-info.component';

export const routes = [
  { path: '', children: [
    { path: '', component: ClinicalInfoComponent },
    { path: 'add-diagnose', loadChildren: './+add-diagnose#AddDiagnoseModule' }
  ]},
];
