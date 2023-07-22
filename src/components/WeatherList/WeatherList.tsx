import React, { useState } from 'react';
import { useGetWeather } from 'api/hooks/useGetWeather';
import { Date } from 'helpers/vo/dayjsVO';
import { fromNumber } from 'helpers/fromNumber';
import { CloudyIcon, TemperatureIcon, WindIcon } from 'assets/svg/components';
import { WeatherCard } from '../WeatherCard';

export const WeatherList = () => {
    const [extendedCard, setExtendedCard] = useState<string>('');
    // TODO need toasts
    const { isError, isLoading, data } = useGetWeather();
    const currentDate = Date.getDate(data?.dt);

    const sevenDays = Date.getSevenDays(data?.dt);

    const normalizedDaysList = sevenDays.map((day) => {
        if (String(day.date) === String(currentDate)) {
            return {
                date: {
                    value: day,
                },
                temperature: {
                    value: fromNumber.getCelsiusFromKelvin(data?.main?.temp),
                    icon: <TemperatureIcon />,
                },
                wind: {
                    value: `${data?.wind?.speed} mps`,
                    icon: <WindIcon />,
                },
                clouds: {
                    value: data?.clouds?.all,
                    icon: <CloudyIcon />,
                },
            };
        } else {
            return {
                date: {
                    value: day,
                },
            };
        }
    });

    const onCardExpand = (dayName: string) => {
        setExtendedCard((prev) => (prev === dayName ? '' : dayName));
    };

    return (
        <>
            {normalizedDaysList.map((dayObject) => {
                const normalizedDayObject = {
                    ...dayObject,
                    date: {
                        value: dayObject.date.value.date,
                    },
                };

                return (
                    <WeatherCard
                        key={dayObject.date.value.dayName}
                        day={dayObject.date.value.dayName}
                        options={normalizedDayObject}
                        onCardClick={() =>
                            onCardExpand(normalizedDayObject.date.value)
                        }
                        isExtended={
                            extendedCard === normalizedDayObject.date.value
                        }
                    />
                );
            })}
        </>
    );
};
