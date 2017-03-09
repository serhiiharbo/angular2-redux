// TODO: combineReducers
// import { combineReducers } from 'redux';
import { AppActions } from '../app.actions';
import { LocalStorageService } from '../shared/services/local-storage.service';

const localStorageService = new LocalStorageService();

interface Diagnose {
    code: number;
    diagnose: string;
    creationDate: any;
    isHistory?: boolean;
}

interface Patient {
    id: number;
    dob: any;
    name: string;
    address: string;
    diagnoses?: Diagnose[];
}

export interface IAppState {
    patients?: any[];
    count: number;
}

export const INITIAL_STATE: IAppState = {
    patients: [],
    count: 0
};

export interface Action { type: string; payload?: any;
}

export function rootReducer(state: IAppState, action: Action): IAppState {
    if (action.type === AppActions.INCREMENT) {
        return {count: state.count + 1};
    }
    if (action.type === AppActions.DECREMENT) {
        return {count: state.count - 1};
    }
    if (action.type === AppActions.ADD_PATIENT) {
        const newPatients = state.patients.slice();
        newPatients.push(action.payload);
        return {
            ...state,
            patients: newPatients,
        };
    }

    syncState(state);
    return state;
}

function syncState(state: IAppState): void {
    localStorageService.setItem('gloriumAppState', state);
}
