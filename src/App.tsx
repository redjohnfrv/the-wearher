import React, { useEffect, useState } from 'react';
import './assets/styles/fonts/fonts.css';
import { ViewportProvider } from './providers';
import { GlobalStyle } from './assets/styles/GlobalStyle';
import { Layout } from './layouts/Layout';
import { WeatherCard } from './components/WeatherCard';
import { getWeatherData } from './api';

const days = [
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday',
    'sunday',
];

const App = () => {
console.log(process.env.REACT_APP_BASE_URL);


    const [extendedCard, setExtendedCard] = useState<string>('');

    const onCardExpand = (dayName: string) => {
        setExtendedCard((prev) => (prev === dayName ? '' : dayName));
    };

    const data = getWeatherData()

    // TODO delete this log
    console.log('data: ', data);
    

    return (
        <ViewportProvider>
            <GlobalStyle />

            <Layout>
                {days.map((day) => (
                    <WeatherCard
                        key={day}
                        day={day}
                        onCardClick={() => onCardExpand(day)}
                        isExtended={extendedCard === day}
                    />
                ))}
            </Layout>
        </ViewportProvider>
    );
};

export default App;
