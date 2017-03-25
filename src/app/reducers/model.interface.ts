export interface Diagnose {
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

export interface PatientsState extends Array<Patient>{}

export interface IAppState {
    patients: Patient[];
    router?: any
}

export const INITIAL_PATIENTS_STATE: PatientsState = [];

export const INITIAL_STATE: IAppState = {
    patients: []
};

export interface Action {
    type: string;
    payload?: any;
}