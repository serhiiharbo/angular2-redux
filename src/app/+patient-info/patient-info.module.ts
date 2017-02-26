import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@angular/material';

import { routes } from './patient-info.routes';
import { PatientInfoComponent } from './patient-info.component';

console.log('`Barrel` bundle loaded asynchronously');

@NgModule({
    declarations: [
        // Components / Directives/ Pipes
        PatientInfoComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        MaterialModule,
        RouterModule.forChild(routes),
    ],
})
export class PatientInfoModule {
    public static routes = routes;
}
