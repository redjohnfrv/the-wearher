import { useEffect, useState } from 'react';
import { getWeatherData } from '..';
import { Weather } from '../dto/weather';

export const useGetWeather = () => {
    const [isLoading, setLoading] = useState(false);
    const [isError, setError] = useState(false);
    const [data, setData] = useState<Partial<Weather> | undefined>(undefined);

    const getWeather = async () => {
        setLoading(true);

        try {
            const response: Partial<Weather> = await getWeatherData();

            if (response) {
                setData(response);
            }
        } catch {
            setError(true);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (!data) {
            getWeather();
        }
    }, []);

    return {
        isLoading,
        isError,
        data,
    };
};
