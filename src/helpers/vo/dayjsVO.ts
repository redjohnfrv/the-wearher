import dayjs from 'dayjs';
import { Days, daysAdapter } from '../../types';
import { fromNumber } from '../fromNumber';

class DateVo {
    public getDayName(day?: number) {
        const correctDay = fromNumber.getCorrectDt(day);
        const normalizedDay = dayjs(correctDay).format('dd') as Days;

        return daysAdapter[normalizedDay];
    }

    public getDate(day?: number) {
        const correctDay = fromNumber.getCorrectDt(day);
        const normalizedDay = dayjs(correctDay).format('MMMM D') as Days;

        return normalizedDay;
    }

    public getSevenDays(day?: number) {
        const normalizedDay = dayjs(fromNumber.getCorrectDt(day));
        const sevenDays = [];

        for (let i = -3; i <= 3; i++) {
            const day = normalizedDay.add(i, 'day').format('dd');
            const date = normalizedDay.add(i, 'day').format('MMMM D');
            
            sevenDays.push({ dayName: day, date });
        }

        return sevenDays;
    }
}

export const Date = new DateVo();
