import { FC, useState } from "react";
import { ThemeButton } from "../button";
import { InputGroup } from "../input-group";
import { InputFlex } from "../styled-components/input-flex";
import { ScheduleContainer } from "./style";
import { Checkbox } from "../checkbox";
import { IScheduleProps } from "./interface";
import { TimeInput } from "../time";

import { ReactComponent as Close } from "./../../assets/icons/close.svg";
import { formatAMPM } from "../../utils/convert-time";
import { useAddScheduleMutation } from "../../services";
import { useAppSelector } from "../../Hooks/typed-hooks";
import { radiologistUserObject } from "../../slices/radiologist-user";
import toast from "react-hot-toast";

// Schedules for radiologist
export const Schedule: FC<IScheduleProps> = ({
    selected,
    day,
    setSelected,
    startTime,
    endTime,
    setDaySchedule,
    timeZone,
}) => {
    const userObject: any = useAppSelector(radiologistUserObject);
    const [postSchedule] = useAddScheduleMutation();
    const [loading, setLoading] = useState<boolean>(false);
    const addSchedule = async () => {
        setLoading(true);
        try {
            await postSchedule({
                userId: userObject.userId,
                schedule: {
                    day,
                    start: startTime,
                    end: endTime,
                    timezone: String(timeZone.value),
                },
            })
                .unwrap()
                .then((res) => {
                    console.log(res);
                    setLoading(false);
                    toast.success("Schedule added successfully");
                })
                .catch((err) => {
                    console.log(err);
                    setLoading(false);
                    toast.error(err.message || "Something went wrong");
                });
        } catch (err: any) {
            console.error(err);
            setLoading(false);
            toast.error(err.message || "Something went wrong");
        }
    };
    return (
        <ScheduleContainer>
            <Checkbox
                setSelected={setSelected}
                selected={selected}
                name={day}
                label={day}
            />
            {selected && (
                <>
                    <InputFlex>
                        <TimeInput
                            value={startTime}
                            label="Choose start time"
                            placeholder="Choose start time"
                            name="startTime"
                            width="48%"
                            setValue={(newValue: Date | null) => {
                                setDaySchedule({
                                    startTime: newValue,
                                });
                            }}
                        />

                        <TimeInput
                            value={endTime}
                            label="Choose end time"
                            placeholder="Choose end time"
                            name="endTime"
                            width="48%"
                            setValue={(newValue: Date | null) => {
                                setDaySchedule({
                                    endTime: newValue,
                                });
                            }}
                        />
                    </InputFlex>
                    <div className="button">
                        <ThemeButton onClick={addSchedule} disabled={loading}>
                            {loading ? "Adding schedule ..." : "Add Hours"}
                        </ThemeButton>
                        <aside className="display">
                            From {formatAMPM(startTime)} to{" "}
                            {formatAMPM(endTime)}
                            <Close
                                onClick={() => {
                                    setSelected(false);
                                }}
                            />
                        </aside>
                    </div>
                </>
            )}
        </ScheduleContainer>
    );
};
