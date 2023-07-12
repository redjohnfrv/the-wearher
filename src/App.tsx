import React from 'react';
import './assets/styles/fonts/fonts.css'
import { ViewportProvider } from './providers';
import { GlobalStyle } from './assets/styles/GlobalStyle';
import { Layout } from './layouts/Layout/Layout';

const App = () => {
    return (
        <ViewportProvider>
            <GlobalStyle />

            <Layout>
                cards here
            </Layout>
        </ViewportProvider>
    );
};

export default App;
