export interface ISelectProps {
    options: { label: string; value: string | number }[];
    label: string;
    placeholder: string;
    disabled?: boolean;
    width?: string;
    handleChange: any;
    selectedItem: { label: string; value: string | number } | undefined;
    className?: string;
}
