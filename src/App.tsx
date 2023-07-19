import React from 'react';
import './assets/styles/fonts/fonts.css';
import { ViewportProvider } from './providers';
import { GlobalStyle } from './assets/styles/GlobalStyle';
import { Layout } from './layouts/Layout';
import { WeatherList } from './components/WeatherList';
import { ThemeProvider } from './providers/ThemeProvider';

const App = () => {
    return (
        <ThemeProvider>
            <ViewportProvider>
                <GlobalStyle />

                <Layout>
                    <WeatherList />
                </Layout>
            </ViewportProvider>
        </ThemeProvider>
    );
};

export default App;
