import React from 'react';
import './assets/styles/fonts/fonts.css'
import { ViewportProvider } from './providers/ViewportProvider';
import { GlobalStyle } from './assets/styles/GlobalStyle';

const App = () => {
    return (
        <ViewportProvider>
            <GlobalStyle />

            <>The weather app</>
        </ViewportProvider>
    );
};

export default App;
