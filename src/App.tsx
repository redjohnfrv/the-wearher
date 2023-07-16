import React, { useState } from 'react';
import './assets/styles/fonts/fonts.css';
import { ViewportProvider } from './providers';
import { GlobalStyle } from './assets/styles/GlobalStyle';
import { Layout } from './layouts/Layout';
import { WeatherList } from './components/WeatherList';

const App = () => {
    return (
        <ViewportProvider>
            <GlobalStyle />

            <Layout>
                <WeatherList />
            </Layout>
        </ViewportProvider>
    );
};

export default App;
