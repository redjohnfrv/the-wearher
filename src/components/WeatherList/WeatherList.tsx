import React, { useState } from 'react';
import { days } from '../../constants';
import { WeatherCard } from '../WeatherCard';
import { useGetWeather } from '../../api/hooks/useGetWeather';

export const WeatherList = () => {
    const [extendedCard, setExtendedCard] = useState<string>('');
    const { isError, isLoading, data } = useGetWeather();

    console.log('data: ', data);
    console.log('isError: ', isError);
    console.log('isLoading: ', isLoading);

    const onCardExpand = (dayName: string) => {
        setExtendedCard((prev) => (prev === dayName ? '' : dayName));
    };

    return (
        <>
            {days.map((day) => (
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
