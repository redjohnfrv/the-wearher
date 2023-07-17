import React, { useState } from 'react';
import { WeatherCard } from '../WeatherCard';
import { useGetWeather } from '../../api/hooks/useGetWeather';
import { Date } from '../../helpers/vo/dayjsVO';
import { fromArray } from '../../helpers/fromArray';

export const WeatherList = () => {
    const [extendedCard, setExtendedCard] = useState<string>('');
    const { isError, isLoading, data } = useGetWeather();
    const currentDayName = Date.getDayName(data?.dt)

    const normalizedDaysList = fromArray.getRerangedDays(currentDayName)

    const onCardExpand = (dayName: string) => {
        setExtendedCard((prev) => (prev === dayName ? '' : dayName));
    };

    return (
        <>
            {normalizedDaysList.map((day) => (
                <WeatherCard
                    key={day}
                    day={day}
                    onCardClick={() => onCardExpand(day)}
                    isExtended={extendedCard === day}
                />
            ))}
        </>
    );
};
