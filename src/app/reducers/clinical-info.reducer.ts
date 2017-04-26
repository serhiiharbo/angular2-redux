import { AppActions } from '../app.actions';
import { LocalStorageService } from '../shared/services/local-storage.service';
import { Action, INITIAL_CLINICAL_INFO_STATE, ClinicalInfoState } from './model.interface';

const localStorageService = new LocalStorageService();

export function clinicalInfoReducer(key) {
    return function (state: ClinicalInfoState = INITIAL_CLINICAL_INFO_STATE, action: Action): ClinicalInfoState {
        if (action.type === AppActions.REHYDRATE) {
            return getState(key) || state
        }

        if (action.type === AppActions.ADD_DIAGNOSE) {
            const newDiagnoses = state.slice();
            newDiagnoses.push(action.payload);
            setState(key, newDiagnoses);
            return newDiagnoses;
        }

        if (action.type === AppActions.EDIT_DIAGNOSE) {
            const oldPatients = state.slice();
            const newDiagnoses = oldPatients.filter(patient => patient.patientId !== action.payload.patientId);
            newDiagnoses.push(action.payload);
            setState(key, newDiagnoses);
            return newDiagnoses;
        }

        if (action.type === AppActions.REMOVE_DIAGNOSE) {
            const newDiagnoses = state.slice();
            newDiagnoses.find(diagnose => diagnose.id === action.payload.id).deleted = true;
            setState(key, newDiagnoses);
            return newDiagnoses;
        }

        return state;
    }
}

// TODO: ls as a provider
function setState(key: string = '', state: ClinicalInfoState): void {
    localStorageService.setItem(`AppState: ${key}`, state);
}

function getState(key): any {
    return localStorageService.getItem(`AppState: ${key}`);
}
