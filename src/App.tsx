import React, { useState } from 'react';
import './assets/styles/fonts/fonts.css';
import { ViewportProvider } from './providers';
import { GlobalStyle } from './assets/styles/GlobalStyle';
import { Layout } from './layouts/Layout';
import { WeatherCard } from './components/WeatherCard';

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
    const [extendedCard, setExtendedCard] = useState<string>('');

    const onCardExpand = (dayName: string) => {
        setExtendedCard((prev) => (prev === dayName ? '' : dayName));
    };

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
