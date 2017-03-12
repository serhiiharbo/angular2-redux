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
    count: number;
}

export const INITIAL_STATE: IAppState = {
    patients: [],
    count: 0
};

export interface Action {
    type: string;
    payload?: any;
}

export function rootReducer(state: IAppState, action: Action): IAppState {
    if (action.type === AppActions.REHYDRATE) {
        console.log('*************', getState());
        return getState() || state
    }

    if (action.type === AppActions.INCREMENT) {
        return {
            ...state,
            count: state.count + 1
        };
    }
    if (action.type === AppActions.DECREMENT) {
        return {
            ...state,
            count: state.count - 1
        };
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

    return state;
}

function setState(state: IAppState): void {
    localStorageService.setItem('gloriumAppState', state);
}

function getState(): void {
    return localStorageService.getItem('gloriumAppState');
}
