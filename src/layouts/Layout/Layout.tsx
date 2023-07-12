import React, { ReactNode } from 'react';
import { styled } from 'styled-components';
import { respondTo } from '../../services/respondTo';
import { colors } from '../../assets/styles/colors';

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

    background-color: ${() => colors.grayscale[100]};

    ${respondTo.s`
        background-color: ${() => colors.grayscale[100]};
    `}
`;
