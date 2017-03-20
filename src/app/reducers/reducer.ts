// TODO: combineReducers
import { combineReducers } from 'redux';
import { composeReducers, defaultFormReducer } from '@angular-redux/form';
import { routerReducer } from '@angular-redux/router';

// import { combineReducers } from 'redux';
import { AppActions } from '../app.actions';
import { LocalStorageService } from '../shared/services/local-storage.service';
import { IAppState, Action, INITIAL_STATE } from './model.interface';

const localStorageService = new LocalStorageService();

// Define the global store shape by combining our application's
// reducers together into a given structure.
export const rootReducer = composeReducers(
    defaultFormReducer(),
    combineReducers({
        patients: patientsReducer(),
        // lions: createAnimalReducer(ANIMAL_TYPES.LION),
        router: routerReducer,
    }));

export function patientsReducer() {
    return function  (state: IAppState = INITIAL_STATE, action: Action): IAppState {
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
}

function setState(state: IAppState): void {
    localStorageService.setItem('gloriumAppState', state);
}

function getState(): void {
    return localStorageService.getItem('gloriumAppState');
}
