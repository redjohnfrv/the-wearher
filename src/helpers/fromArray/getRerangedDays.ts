import { days } from '../../constants';

export const getRerangedDays = (inputDay: string) => {
    const inputDayIndex = days.findIndex((day) => day === inputDay);
    const shiftedDays = [
        ...days.slice(inputDayIndex + 1),
        ...days.slice(0, inputDayIndex),
    ];

    return [...shiftedDays.slice(-3), inputDay, ...shiftedDays.slice(0, -3)];
};
