export type ISchedule = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [x: string]: any;
    id?: string;
    startDate: string;
    endDate: string;
 };
 
 export type IScheduleFrom = {
    startDate: Date;
    endDate: Date;
    startTime: string;
    endTime: string;
 };