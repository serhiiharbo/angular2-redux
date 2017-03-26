import { combineReducers } from 'redux';
import { composeReducers, defaultFormReducer } from '@angular-redux/form';
import { routerReducer } from '@angular-redux/router';
/* Local imports */
import { patientsReducer } from './patient-info.reducer';
import { clinicalInfoReducer } from './clinical-info.reducer';


// Define the global store shape by combining our application's
// reducers together into a given structure.
export const rootReducer = composeReducers(
    defaultFormReducer(),
    combineReducers({
        patients: patientsReducer('patients'),
        diagnoses: clinicalInfoReducer('diagnoses'),
        router: routerReducer,
    }));
