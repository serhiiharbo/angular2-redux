import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgRedux } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';
import * as moment from 'moment';
import { AppActions } from '../../app.actions';
import { IAppState, Patient, Diagnose } from '../../reducers';

@Component({
    selector: 'add-diagnose',
    templateUrl: './add-diagnose.component.html',
    styleUrls: ['./add-diagnose.component.scss']
})
export class AddDiagnoseComponent implements OnInit {
    diagnose: Diagnose;
    private patientCurrentData: Patient;


    constructor(protected router: Router,
                protected actions: AppActions,
                protected route: ActivatedRoute,
                protected ngRedux: NgRedux <IAppState>) {
    }

    ngOnInit() {
        const patientId: Observable<string> = this.route.fragment;
        const state = this.ngRedux.getState();
        this.diagnose = {
            id: 0,
            patientId: undefined,
            code: '',
            diagnose: '',
            creationDate: undefined
        };
        patientId.subscribe(id => {
            const patient = state.patients.filter(patient => patient.id === +id)[0];
            this.patientCurrentData = {...patient};

            this.diagnose.patientId = +id;
        })
    }

    addDiagnose(formData) {
        this.diagnose.id = new Date().getTime();
        this.diagnose.code = formData.code;
        this.diagnose.diagnose = formData.diagnose;
        this.diagnose.creationDate = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
        this.actions.onAddDiagnose(this.diagnose);
        this.router.navigate(['/clinical-info']);
    }
}

/*
 * We're loading this component asynchronously
 * We are using some magic with es6-promise-loader that will wrap the module with a Promise
 * see https://github.com/gdi2290/es6-promise-loader for more info
 */

console.log('`AddDiagnoseComponent` loaded asynchronously');