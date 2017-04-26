import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@angular/material';
// import { DatePickerModule } from '../../shared';
import { routes } from './add-patient.routes';
import { AddPatientComponent } from './add-patient.component';


@NgModule({
    declarations: [
        // Components / Directives/ Pipes
        AddPatientComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        // DatePickerModule,
        MaterialModule,
        RouterModule.forChild(routes),
    ],
})
export class AddPatientModule {
    public static routes = routes;
}
