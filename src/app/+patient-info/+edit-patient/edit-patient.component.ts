import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { NgRedux } from '@angular-redux/store';
import { AppActions } from '../../app.actions';
import { Patient } from '../../reducers';
import { IAppState } from '../../reducers/model.interface';

@Component({
    selector: 'edit-patient',
    templateUrl: './edit-patient.component.html',
    styleUrls: ['./edit-patient.component.scss']
})
export class EditPatientComponent implements OnInit {
    patient: Patient;

    constructor(protected router: Router,
                protected actions: AppActions,
                protected route: ActivatedRoute,
                protected ngRedux: NgRedux <IAppState>) {
    }

    ngOnInit() {
        const id: Observable<string> = this.route.fragment;
        const state = this.ngRedux.getState();
        id.subscribe(id => this.patient = state.patients.filter(patient => patient.id === +id)[0]);
    }

    saveEditedPatient() {
        this.actions.onEditPatient(this.patient);
        this.router.navigate(['/patient-info']);
    }
}

/*
 * We're loading this component asynchronously
 * We are using some magic with es6-promise-loader that will wrap the module with a Promise
 * see https://github.com/gdi2290/es6-promise-loader for more info
 */