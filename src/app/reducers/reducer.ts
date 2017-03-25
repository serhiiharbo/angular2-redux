import { combineReducers } from 'redux';
import { composeReducers, defaultFormReducer } from '@angular-redux/form';
import { routerReducer } from '@angular-redux/router';

import { AppActions } from '../app.actions';
import { LocalStorageService } from '../shared/services/local-storage.service';
import { PatientsState, Action, INITIAL_PATIENTS_STATE } from './model.interface';

const localStorageService = new LocalStorageService();

// Define the global store shape by combining our application's
// reducers together into a given structure.
export const rootReducer = composeReducers(
    defaultFormReducer(),
    combineReducers({
        patients: patientsReducer(),
        router: routerReducer,
    }));

export function patientsReducer() {
    return function  (patientsState: PatientsState = INITIAL_PATIENTS_STATE, action: Action): PatientsState {
        if (action.type === AppActions.GET_PATIENTS) {
            return getState() || patientsState
        }

        if (action.type === AppActions.ADD_PATIENT) {
            const newPatients = patientsState.slice();
            newPatients.push(action.payload);
            setState(newPatients);
            return newPatients;
        }

        if (action.type === AppActions.EDIT_PATIENT) {
            const oldPatients = patientsState.slice();
            const newPatients = oldPatients.filter(patient => patient.id !== action.payload.id);
            newPatients.push(action.payload);
            setState(newPatients);
            return newPatients;
        }

        if (action.type === AppActions.REMOVE_PATIENT) {
            const oldPatients = patientsState.slice();
            const newPatients = oldPatients.filter(patient => patient.id !== action.payload.id);
            setState(newPatients);
            return newPatients;
        }

        return patientsState;
    }
}

function setState(state: PatientsState): void {
    localStorageService.setItem('gloriumAppState: patients', state);
}

function getState() {
    return localStorageService.getItem('gloriumAppState: patients');
}
