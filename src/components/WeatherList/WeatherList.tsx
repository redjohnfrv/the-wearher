import React, { useState } from 'react';
import { useGetWeather } from 'api/hooks/useGetWeather';
import { Date } from 'helpers/vo/dayjsVO';
import { fromArray } from 'helpers/fromArray';
import { fromNumber } from 'helpers/fromNumber';
import { CloudyIcon, TemperatureIcon, WindIcon } from 'assets/svg/components';
import { OptionsListType } from 'api/dto/weather';
import { WeatherCard } from '../WeatherCard';

export const WeatherList = () => {
    const [extendedCard, setExtendedCard] = useState<string>('');
    // TODO need toasts
    const { isError, isLoading, data } = useGetWeather();
    const currentDayName = Date.getDayName(data?.dt);
    const currentDate = Date.getDate(data?.dt);
    const normalizedDaysList = fromArray.getRerangedDays(currentDayName);

    const normalizedTemperature = fromNumber.getCelsiusFromKelvin(data?.main?.temp)

    const optionsList: OptionsListType = {
        date: {
            value: currentDate,
        },
        temperature: {
            value: normalizedTemperature,
            icon: <TemperatureIcon />
        },
        wind: {
            value: `${data?.wind?.speed} mps`,
            icon: <WindIcon />
        },
        clouds: {
            value: data?.clouds?.all,
            icon: <CloudyIcon />
        },
    }

    const onCardExpand = (dayName: string) => {
        setExtendedCard((prev) => (prev === dayName ? '' : dayName));
    };

    console.log(optionsList);
    

    return (
        <>
            {normalizedDaysList.map((day) => (
                <WeatherCard
                    key={day}
                    day={day}
                    options={optionsList}
                    onCardClick={() => onCardExpand(day)}
                    isExtended={extendedCard === day}
                />
            ))}
        </>
    );
};
