export const formatAMPM = (date: Date | null) => {
    let hours: number | undefined = date?.getHours();
    let minutes: string | number | undefined = date?.getMinutes();
    let ampm: string = Number(hours) >= 12 ? "pm" : "am";
    hours = Number(hours) % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = Number(minutes) < 10 ? "0" + minutes : minutes;
    let strTime: string = hours + ":" + minutes + " " + ampm;
    return strTime;
};
