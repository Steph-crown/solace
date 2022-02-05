import { FC } from "react";

// @mui package for date
import Box from "@mui/material/Box";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DesktopDatePicker from "@mui/lab/DatePicker";
import { ITimeInputProps } from "./interface";
import { TimeInputContainer } from "./style";
import { TimePicker } from "@mui/lab";
import TextField from "@mui/material/TextField";

export const TimeInput: FC<ITimeInputProps> = ({
    label,
    placeholder,
    width,
    value,
    setValue,
}) => {
    return (
        <TimeInputContainer width={width}>
            <small>{label}</small>
            <div className="date-place">
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    {/* <DesktopDatePicker
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
                    /> */}
                    <TimePicker
                        value={value}
                        onChange={setValue}
                        renderInput={(params) => <TextField {...params} />}
                    />
                </LocalizationProvider>
            </div>
        </TimeInputContainer>
    );
};
