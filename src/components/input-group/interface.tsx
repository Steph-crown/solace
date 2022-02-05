export interface IInputGroup {
    label: string;
    placeholder: string;
    value: any;
    type?: string;
    disabled?: boolean;
    name: string;
    width?: string;
    error?: string | false | undefined;

    // Accepts a react change event and returns nothing
    handleChange?: (e: React.ChangeEvent<any>) => void;
}
