/**
 * Created by aquile_bernadotte on 3/20/17.
 */
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