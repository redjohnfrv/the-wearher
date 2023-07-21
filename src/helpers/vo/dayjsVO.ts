import dayjs from 'dayjs';
import { Days, daysAdapter } from '../../types';
import { fromNumber } from '../fromNumber';

class DateVo {
    public getDayName(day?: number) {
        const correctDay = fromNumber.getCorrectDt(day)
        const normalizedDay = dayjs(correctDay).format('dd') as Days;

        return daysAdapter[normalizedDay];
    }

    public getDate(day?: number) {
        const correctDay = fromNumber.getCorrectDt(day)
        const normalizedDay = dayjs(correctDay).format('MMMM d') as Days;

        return normalizedDay;
    }
}

export const Date = new DateVo()
