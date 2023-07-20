import React from 'react';
import { styled } from 'styled-components';

type CardHeaderProps = {
    title: string;
};

export const CardHeader = ({ title }: CardHeaderProps) => {
    return <Root>{title}</Root>;
};

const Root = styled.h2`
    position: relative;
    margin: 0 10px;

    ${({ theme: { colors } }) => `color: ${colors.default.darkBlue}`};

    &:after {
        content: '';
        position: absolute;
        bottom: -3px;
        left: 0;
        width: 100%;
        height: 2px;
        
        ${({ theme: { colors } }) => `background-color: ${colors.default.darkBlue}`};
    }
`;
