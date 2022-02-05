export interface DataAddSchedule {
    userId: string;
    schedule: {
        day:
            | "Sunday"
            | "Monday"
            | "Tuesday"
            | "Wednesday"
            | "Thursday"
            | "Friday"
            | "Saturday";
        start: Date | null;
        end: Date | null;
        timezone: string;
    };
}
