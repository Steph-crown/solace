export interface IFileUploadProps {
    label: string;
    document: any[];
    setDocument: any;

    // An array of file extensions that it can accept
    acceptableFiles?: string[];
    maxSize?: number;
    multiple?: boolean;
    setPresenceOfUnsupportedFiles: (val: boolean) => void;
    presenceOfUnsupportedFiles: boolean;
    error?: string;
    // placeholder: string;
    // value: any;
    // type?: string;
    // disabled?: Boolean;
    // name: string;
    // width?: string;
}
