import React, { ReactNode } from 'react';
import { styled } from 'styled-components';

type Props = {
    children: ReactNode;
};

export const Layout = ({ children }: Props) => {
    return <Root>{children}</Root>;
};

const Root = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    min-height: 480px;
    min-width: 768px;
`;
