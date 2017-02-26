import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
    selector: 'add-patient',
    templateUrl: './add-patient.component.html',
})
export class AddPatientComponent implements OnInit {
    private DOB: any;

    public ngOnInit() {
        this.DOB = moment().format('MM/DD/YYYY');
    }

}

/*
 * We're loading this component asynchronously
 * We are using some magic with es6-promise-loader that will wrap the module with a Promise
 * see https://github.com/gdi2290/es6-promise-loader for more info
 */