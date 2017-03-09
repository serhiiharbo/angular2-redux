import { Action } from 'redux';
import { ACTIONS } from '../actions/actions';

interface Diagnose {
    code: number,
    diagnose: string,
    creationDate: any,
    isHistory?: boolean
}

interface Patient {
    id: number,
    dob: any,
    name: string,
    address: string,
    diagnoses?: Diagnose[]
}

export interface ReduxAppState {
    patients: any[];
}

export const initialState: ReduxAppState = {
    patients: []
};

export default (state = initialState, { type, payload = {}}): ReduxAppState => {
    if (type === ACTIONS.ADD_PATIENT) {
        const newPatients = state.patients.slice();
        newPatients.push(payload);
        return {
            ...state,
            patients: newPatients,
        };
    }
    console.log('>>>>>>>>>>>>>>>>>>>>', state, type, payload);
    return state;
}




// export function rootReducer(state: AppState, action: Action): AppState {
//     if (action.type === MedicalActions.ADD_PATIENT) {
//         case MedicalActions.ADD_PATIENT:
//             return {
//                 patients: patients.push(action.payload)
//             };
//         case MedicalActions.DECREMENT:
//             return {
//                 counter: state.counter - 1,
//                 model: state.model
//             };
//         case MedicalActions.CLEAR_DESCENT_MODEL_STATE:
//             return {
//                 counter: state.counter,
//                 model: {assetClass: 'FX', option2: 0}
//             };
//         default:
//             return state;
//     }
// }
