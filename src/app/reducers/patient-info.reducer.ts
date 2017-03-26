import { AppActions } from '../app.actions';
import { LocalStorageService } from '../shared/services/local-storage.service';
import { PatientsState, Action, INITIAL_PATIENTS_STATE } from './model.interface';

const localStorageService = new LocalStorageService();

export function patientsReducer(key) {
    return function  (state: PatientsState = INITIAL_PATIENTS_STATE, action: Action): PatientsState {
        if (action.type === AppActions.REHYDRATE) {
            return getState(key) || state
        }

        if (action.type === AppActions.ADD_PATIENT) {
            const newPatients = state.slice();
            newPatients.push(action.payload);
            setState(key, newPatients);
            return newPatients;
        }

        if (action.type === AppActions.EDIT_PATIENT) {
            const oldPatients = state.slice();
            const newPatients = oldPatients.filter(patient => patient.id !== action.payload.id);
            newPatients.push(action.payload);
            setState(key, newPatients);
            return newPatients;
        }

        if (action.type === AppActions.REMOVE_PATIENT) {
            const oldPatients = state.slice();
            const newPatients = oldPatients.filter(patient => patient.id !== action.payload.id);
            setState(key, newPatients);
            return newPatients;
        }

        return state;
    }
}

// TODO: ls as a provider
function setState(key:string = '', state: PatientsState): void {
    localStorageService.setItem(`AppState: ${key}`, state);
}

function getState(key): any {
    return localStorageService.getItem(`AppState: ${key}`);
}
