import { Component, OnInit, ViewChild } from '@angular/core';
import { AppActions } from '../app.actions';
import { select } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';
import { MdSidenav } from '@angular/material';
import { PatientsState, ClinicalInfoState, Diagnose } from '../reducers';

/*
 * We're loading this component asynchronously
 * We are using some magic with es6-promise-loader that will wrap the module with a Promise
 * see https://github.com/gdi2290/es6-promise-loader for more info
 */

console.log('`clinical-info` component loaded asynchronously');

@Component({
    inputs: ['openSideBar'],
    selector: 'clinical-info',
    styleUrls: ['clinical-info.component.scss'],
    templateUrl: './clinical-info.component.html',
})
export class ClinicalInfoComponent implements OnInit {
    // @Input() openSideBar: any;
    private patients: PatientsState;
    private clinicalInfo: ClinicalInfoState;
    private diagnoses: ClinicalInfoState = [];
    private deletedDiagnoses: ClinicalInfoState = [];
    private id: number;

    @ViewChild('sidenav') sidenav: MdSidenav;
    @select(state => state.patients) patients$: Observable <PatientsState>;
    @select(state => state.diagnoses) diagnoses$: Observable <ClinicalInfoState>;

    constructor(protected actions: AppActions) {
    }

    public ngOnInit(): void {
        this.patients$.subscribe(patients => this.patients = patients);
        this.diagnoses$.subscribe(info => this.clinicalInfo = info);
    }

    toogleSidenav(id: number): void {
        this.diagnoses = this.deletedDiagnoses = [];
        this.id = id;
        this.sidenav.toggle();
    }

    openSideBar(): void {
        this.diagnoses = this.clinicalInfo.filter(d => d.patientId === this.id && !d.deleted);
        this.deletedDiagnoses = this.clinicalInfo.filter(d => d.patientId === this.id && d.deleted);
    }

    removeDiagnose(id: number): void {
        this.actions.onRemoveDiagnose({id});
        this.diagnoses$.subscribe(info => {
            this.diagnoses = info.filter(d => d.patientId === this.id && !d.deleted);
            this.deletedDiagnoses = info.filter(d => d.patientId === this.id && d.deleted);
        });
    }
}
