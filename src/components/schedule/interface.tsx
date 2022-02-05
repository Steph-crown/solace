export interface IScheduleProps {
    selected: boolean;
    setSelected: any;
    day:
        | "Sunday"
        | "Monday"
        | "Tuesday"
        | "Wednesday"
        | "Thursday"
        | "Friday"
        | "Saturday";
    startTime: Date | null;
    endTime: Date | null;
    setDaySchedule: (time: { [key: string]: Date | null }) => void;
    timeZone: { label: string; value: number };
}
