import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@angular/material';
// import { DatePickerModule } from '../../shared';

import { routes } from './edit-patient.routes';
import { EditPatientComponent } from './edit-patient.component';

@NgModule({
    declarations: [
        // Components / Directives/ Pipes
        EditPatientComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        MaterialModule,
        // DatePickerModule,
        RouterModule.forChild(routes),
    ],
})
export class EditPatientModule {
    public static routes = routes;
}
