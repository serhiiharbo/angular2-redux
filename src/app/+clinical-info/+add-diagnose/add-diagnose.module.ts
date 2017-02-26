import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { routes } from './add-diagnose.routes';
import { AddDiagnoseComponent } from './add-diagnose.component';

console.log('`AddDiagnose` bundle loaded asynchronously');

@NgModule({
  declarations: [
    // Components / Directives/ Pipes
    AddDiagnoseComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ],
})
export class AddDiagnoseModule {
  public static routes = routes;
}
