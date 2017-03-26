export interface Patient {
    id: number;
    dob: any;
    name: string;
    address?: string;
    edited?: number;
}
export interface Diagnose {
    id: number;
    patientId: number | undefined;
    code: number | string;
    diagnose: string;
    creationDate: any;
    deleted?: boolean;
}

export interface PatientsState extends Array<Patient>{}
export interface ClinicalInfoState extends Array<Diagnose>{}

export interface IAppState {
    patients: Patient[];
    diagnoses: Diagnose[];
    router?: any
}

export const INITIAL_PATIENTS_STATE: PatientsState = [];
export const INITIAL_CLINICAL_INFO_STATE: ClinicalInfoState = [];

export const INITIAL_STATE: IAppState = {
    patients: [],
    diagnoses: []
};

export interface Action {
    type: string;
    payload?: any;
}