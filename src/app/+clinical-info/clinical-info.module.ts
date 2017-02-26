import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@angular/material';

import { routes } from './clinical-info.routes';
import { ClinicalInfoComponent } from './clinical-info.component';

console.log('`ClinicalInfoComponent` bundle loaded asynchronously');

@NgModule({
    declarations: [
        // Components / Directives/ Pipes
        ClinicalInfoComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        MaterialModule,
        RouterModule.forChild(routes),
    ],
})
export class ClinicalInfoModule {
    public static routes = routes;
}
