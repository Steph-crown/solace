export interface IStudies {
    patientInfo: IPatientInfo;
    description: IDescription;
    radiologyCenter: string;
    dateReceived: Date;
    // 0 for incomplete, 1 for pending, 2 for complete
    status: 0 | 1 | 2;
}

export interface IPatientInfo {
    name: string;
    date: Date;
}
export interface IDescription {
    acronym: string;
    full: string;
}
