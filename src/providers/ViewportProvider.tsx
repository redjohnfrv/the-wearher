import React, { createContext, ReactNode, useEffect, useState } from 'react';

export const ViewportContext = createContext({ width: 0, height: 0 });

type Props = { children: ReactNode };

export const ViewportProvider = ({ children }: Props) => {
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);
    
    const handleWindowResize = () => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    };

    useEffect(() => {
        if (typeof window !== 'undefined') {
            handleWindowResize();
        }
    }, []);

    useEffect(() => {
        window.addEventListener('resize', handleWindowResize);
        return () => window.removeEventListener('resize', handleWindowResize);
    }, []);

    return (
        <ViewportContext.Provider value={{ width, height }}>
            {children}
        </ViewportContext.Provider>
    );
};
