import { Injectable } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from './reducers/reducer';

export interface Action {
    type: string;
    payload: any;
}

@Injectable()
export class AppActions {
    static INCREMENT = 'INCREMENT';
    static DECREMENT = 'DECREMENT';

    static ADD_PATIENT = 'ADD_PATIENT';
    static EDIT_PATIENT = 'EDIT_PATIENT';
    static REMOVE_PATIENT = 'REMOVE_PATIENT';

    static ADD_DIAGNOSE = 'ADD_DIAGNOSE';
    static EDIT_DIAGNOSE = 'EDIT_DIAGNOSE';
    static REMOVE_DIAGNOSE = 'REMOVE_DIAGNOSE';

    constructor(private ngRedux: NgRedux <IAppState>,) {
    }

    action(type: string, payload: any = {}) {
        return {type, payload}
    };

    increment(payload: any): Action {
        return this.ngRedux.dispatch(this.action(AppActions.INCREMENT, payload));
    }

    decrement(payload: any): Action {
        return this.ngRedux.dispatch(this.action(AppActions.DECREMENT, payload));
    }

    onAddPatinet(payload: any): Action {
        return this.ngRedux.dispatch(this.action(AppActions.ADD_PATIENT, payload));
    }

    onEditPatient(payload: any): Action {
        return this.ngRedux.dispatch(this.action(AppActions.EDIT_PATIENT, payload));
    }

    onRemovePatient(payload: any): Action {
        return this.ngRedux.dispatch(this.action(AppActions.REMOVE_PATIENT, payload));
    }

    onAddDiagnose(payload: any): Action {
        return this.ngRedux.dispatch(this.action(AppActions.ADD_DIAGNOSE, payload));
    }

    onEditDiagnose(payload: any): Action {
        return this.ngRedux.dispatch(this.action(AppActions.EDIT_DIAGNOSE, payload));
    }

    onRemoveDiagnose(payload: any): Action {
        return this.ngRedux.dispatch(this.action(AppActions.REMOVE_DIAGNOSE, payload));
    }
}
