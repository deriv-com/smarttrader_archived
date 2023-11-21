import moment from 'moment';

export const epochToGMTFormat = (time: number) => moment.unix(time).utc().format('YYYY-MM-DD HH:mm:ss [GMT]');
export const epochToLocalFormat = (time: number) => moment.unix(time).utc().local().format('YYYY-MM-DD HH:mm:ss Z');
