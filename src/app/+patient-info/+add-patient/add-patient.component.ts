/*
 * We're loading this component asynchronously
 * We are using some magic with es6-promise-loader that will wrap the module with a Promise
 * see https://github.com/gdi2290/es6-promise-loader for more info
 */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { AppActions } from '../../app.actions';
import { Patient } from '../../reducers/reducer';

@Component({
    selector: 'add-patient',
    templateUrl: './add-patient.component.html',
    styleUrls: ['./add-patient.component.scss']
})
export class AddPatientComponent implements OnInit {
    patient: Patient;

    constructor(protected router: Router,
                protected actions: AppActions) {}

    ngOnInit() {
        this.patient = {
            id: 0,
            dob: moment(0).format('YYYY-MM-DD'),
            name: ''
        };
    }

    savePatient() {
        this.patient.id = new Date().getTime();
        console.log('+++++++++', this.patient);
        this.actions.onAddPatient(this.patient);
        this.router.navigate(['/patient-info']);
    }
}
