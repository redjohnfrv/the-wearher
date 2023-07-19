import React, { ReactNode, createContext, useState } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { theme } from '../assets/styles/theme/theme';

type ThemeContextProps = {
    theme: keyof typeof theme;
    toggleTheme: () => void;
};

export const ThemeContext = createContext<ThemeContextProps | null>(null);

type ThemeProviderProps = {
    children: ReactNode;
};

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
    const [currentTheme, setCurrentTheme] =
        useState<keyof typeof theme>('sunny');

    const toggleTheme = () => {
        setCurrentTheme((prevTheme) =>
            prevTheme === 'sunny' ? 'rainy' : 'sunny'
        );
    };

    return (
        <ThemeContext.Provider value={{ theme: currentTheme, toggleTheme }}>
            <StyledThemeProvider
                theme={currentTheme === 'sunny' ? theme.sunny : theme.rainy}
            >
                {children}
            </StyledThemeProvider>
        </ThemeContext.Provider>
    );
};
