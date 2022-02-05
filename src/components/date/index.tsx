import { FC } from "react";
import { IDateInputProps } from "./interface";
import { DateInputContainer } from "./style";

// @mui package for date
import Box from "@mui/material/Box";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DesktopDatePicker from "@mui/lab/DatePicker";

export const DateInput: FC<IDateInputProps> = ({
    label,
    placeholder,
    width,
    value,
    setValue,
}) => {
    return (
        <DateInputContainer width={width}>
            <small>{label}</small>
            <div className="date-place">
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DesktopDatePicker
                        label="Custom input"
                        value={value}
                        onChange={(newValue) => {
                            setValue(newValue);
                        }}
                        renderInput={({ inputRef, inputProps, InputProps }) => (
                            <Box sx={{ display: "flex", alignItems: "center" }}>
                                <input
                                    ref={inputRef}
                                    {...inputProps}
                                    placeholder={placeholder}
                                />
                                {InputProps?.endAdornment}
                            </Box>
                        )}
                    />
                </LocalizationProvider>
            </div>
        </DateInputContainer>
    );
};
