import moment from 'moment';

export const epochToUTC = (time: number, format: string) => moment.unix(time).utc().format(format);
export const epochToLocal = (time: number, format: string) => moment.unix(time).utc().local().format(format);
