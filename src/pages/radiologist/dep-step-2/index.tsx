import { FC, useState } from "react";
import { InputFlex } from "../../../components/styled-components/input-flex";
import { useQuery } from "../../hooks/use-query";
import { useHistory } from "react-router";
import { RadiologistStepContainer } from "../../../components/Radiologist/RadiologistStepContainer";
import { Checkbox } from "../../../components/checkbox";
import { DateInput } from "../../../components/date";
import { Schedule } from "../../../components/schedule";
import { removeUnused } from "../../../utils/remove-unused";
import { Select } from "../../../components/select";
import { allTimeZones } from "./step1.data";
import { ThemeButton } from "../../../components/button";

export const DepStep2: FC = () => {
    const history = useHistory();

    const handleSkipStep = () => {
        history.push(`/radiologist/register/dep-3`);
    };

    // State to check if the availability date is set
    // const [isThereAvailableDate, setIsThereAvailabilityDate] =
    //     useState<boolean>(false);
    // const [availabilityStart, setAvailabilityStart] = useState<Date | null>(
    //     null
    // );
    // const [availabilityEnd, setAvailabilityEnd] = useState<Date | null>(null);

    const [timeZone, setTimeZone] = useState<{ label: string; value: number }>({
        label: "GMT",
        value: 0,
    });

    const [sunday, setSunday] = useState<{
        selected: boolean;
        day: "Sunday";
        startTime: Date | null;
        endTime: Date | null;
    }>({
        selected: true,
        day: "Sunday",
        startTime: new Date(),
        endTime: new Date(),
    });

    const [monday, setMonday] = useState<{
        selected: boolean;
        day: "Monday";
        startTime: Date | null;
        endTime: Date | null;
    }>({
        selected: false,
        day: "Monday",
        startTime: new Date(),
        endTime: new Date(),
    });

    const [tuesday, setTuesday] = useState<{
        selected: boolean;
        day: "Tuesday";
        startTime: Date | null;
        endTime: Date | null;
    }>({
        selected: false,
        day: "Tuesday",
        startTime: new Date(),
        endTime: new Date(),
    });

    const [wednesday, setWednesday] = useState<{
        selected: boolean;
        day: "Wednesday";
        startTime: Date | null;
        endTime: Date | null;
    }>({
        selected: false,
        day: "Wednesday",
        startTime: new Date(),
        endTime: new Date(),
    });

    const [thursday, setThursday] = useState<{
        selected: boolean;
        day: "Thursday";
        startTime: Date | null;
        endTime: Date | null;
    }>({
        selected: false,
        day: "Thursday",
        startTime: new Date(),
        endTime: new Date(),
    });

    const [friday, setFriday] = useState<{
        selected: boolean;
        day: "Friday";
        startTime: Date | null;
        endTime: Date | null;
    }>({
        selected: false,
        day: "Friday",
        startTime: new Date(),
        endTime: new Date(),
    });
    const [saturday, setSaturday] = useState<{
        selected: boolean;
        day: "Friday";
        startTime: Date | null;
        endTime: Date | null;
    }>({
        selected: false,
        day: "Friday",
        startTime: new Date(),
        endTime: new Date(),
    });

    return (
        <RadiologistStepContainer step={2} handleSkipStep={handleSkipStep}>
            <h1>Tell us your availability</h1>
            <p>When are your consultaions hours?</p>

            <form action="">
                <h4>Select Timezone</h4>
                <Select
                    options={allTimeZones}
                    placeholder="Select timezone"
                    label="Select timezone"
                    width="100%"
                    selectedItem={timeZone}
                    handleChange={(item: { label: string; value: number }) => {
                        setTimeZone(item);
                        return null;
                    }}
                />{" "}
                <h4>Weekly Service Scheduling</h4>
                <Schedule
                    timeZone={timeZone}
                    setDaySchedule={(time: {
                        [key: string]: string | Date | null;
                    }) => {
                        setSunday((prev) => ({
                            ...prev,
                            ...time,
                        }));
                    }}
                    {...sunday}
                    setSelected={() =>
                        setSunday((prev) => ({
                            ...prev,
                            selected: !prev.selected,
                        }))
                    }
                />
                <Schedule
                    timeZone={timeZone}
                    setDaySchedule={(time: {
                        [key: string]: string | Date | null;
                    }) => {
                        setMonday((prev) => ({
                            ...prev,
                            ...time,
                        }));
                    }}
                    {...monday}
                    setSelected={() =>
                        setMonday((prev) => ({
                            ...prev,
                            selected: !prev.selected,
                        }))
                    }
                />
                <Schedule
                    timeZone={timeZone}
                    setDaySchedule={(time: {
                        [key: string]: string | Date | null;
                    }) => {
                        setTuesday((prev) => ({
                            ...prev,
                            ...time,
                        }));
                    }}
                    {...tuesday}
                    setSelected={() =>
                        setTuesday((prev) => ({
                            ...prev,
                            selected: !prev.selected,
                        }))
                    }
                />
                <Schedule
                    timeZone={timeZone}
                    setDaySchedule={(time: {
                        [key: string]: string | Date | null;
                    }) => {
                        setWednesday((prev) => ({
                            ...prev,
                            ...time,
                        }));
                    }}
                    {...wednesday}
                    setSelected={() =>
                        setWednesday((prev) => ({
                            ...prev,
                            selected: !prev.selected,
                        }))
                    }
                />
                <Schedule
                    timeZone={timeZone}
                    setDaySchedule={(time: {
                        [key: string]: string | Date | null;
                    }) => {
                        setThursday((prev) => ({
                            ...prev,
                            ...time,
                        }));
                    }}
                    {...thursday}
                    setSelected={() =>
                        setThursday((prev) => ({
                            ...prev,
                            selected: !prev.selected,
                        }))
                    }
                />
                <Schedule
                    timeZone={timeZone}
                    setDaySchedule={(time: {
                        [key: string]: string | Date | null;
                    }) => {
                        setFriday((prev) => ({
                            ...prev,
                            ...time,
                        }));
                    }}
                    {...friday}
                    setSelected={() =>
                        setFriday((prev) => ({
                            ...prev,
                            selected: !prev.selected,
                        }))
                    }
                />
                <Schedule
                    timeZone={timeZone}
                    setDaySchedule={(time: {
                        [key: string]: string | Date | null;
                    }) => {
                        setSaturday((prev) => ({
                            ...prev,
                            ...time,
                        }));
                    }}
                    {...saturday}
                    setSelected={() =>
                        setSaturday((prev) => ({
                            ...prev,
                            selected: !prev.selected,
                        }))
                    }
                />
                <div className="button">
                    <ThemeButton type="submit" onClick={handleSkipStep}>
                        Next
                    </ThemeButton>
                </div>
            </form>
        </RadiologistStepContainer>
    );
};
