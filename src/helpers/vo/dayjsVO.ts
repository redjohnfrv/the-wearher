import dayjs from 'dayjs';
import { Days, daysAdapter } from '../../types';
import { fromNumber } from '../fromNumber';

class DateVo {
    public getDayName(day?: number) {
        const correctDay = fromNumber.getCorrectDt(day)
        const normalizedDay = dayjs(correctDay).format('dd') as Days;

        return daysAdapter[normalizedDay];
    }
}

export const Date = new DateVo()
