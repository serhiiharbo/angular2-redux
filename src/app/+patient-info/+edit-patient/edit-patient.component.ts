import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
    selector: 'edit-patient',
    templateUrl: './edit-patient.component.html',
})
export class EditPatientComponent implements OnInit {
    private DOB: any;

    public ngOnInit() {
    }

}

/*
 * We're loading this component asynchronously
 * We are using some magic with es6-promise-loader that will wrap the module with a Promise
 * see https://github.com/gdi2290/es6-promise-loader for more info
 */