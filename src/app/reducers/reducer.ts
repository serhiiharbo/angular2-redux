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

export interface Patient {
    id: number;
    dob: any;
    name: string;
    address?: string;
    diagnoses?: Diagnose[];
}

export interface IAppState {
    patients?: Patient[];
}

export const INITIAL_STATE: IAppState = {
    patients: []
};

export interface Action {
    type: string;
    payload?: any;
}

export function rootReducer(state: IAppState, action: Action): IAppState {
    if (action.type === AppActions.REHYDRATE) {
        return getState() || state
    }

    if (action.type === AppActions.ADD_PATIENT) {
        const newPatients = state.patients.slice();
        newPatients.push(action.payload);
        setState({...state, patients: newPatients});
        return {
            ...state,
            patients: newPatients,
        };
    }

    if (action.type === AppActions.EDIT_PATIENT) {
        const oldPatients = state.patients.slice();
        const newPatients = oldPatients.filter(patient => patient.id !== action.payload.id);
        newPatients.push(action.payload);
        setState({...state, patients: newPatients});
        return {
            ...state,
            patients: newPatients,
        };
    }

    if (action.type === AppActions.REMOVE_PATIENT) {
        const oldPatients = state.patients.slice();
        const newPatients = oldPatients.filter(patient => patient.id !== action.payload.id);
        setState({...state, patients: newPatients});
        return {
            ...state,
            patients: newPatients,
        };
    }

    return state;
}

function setState(state: IAppState): void {
    localStorageService.setItem('gloriumAppState', state);
}

function getState(): void {
    return localStorageService.getItem('gloriumAppState');
}
