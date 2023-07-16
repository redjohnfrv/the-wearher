import React from 'react';
import { css, styled } from 'styled-components';
import { respondTo } from '../../services/respondTo';

type Props = {
    day: string;
    isExtended: boolean;
    onCardClick: () => void;
};

export const WeatherCard = ({ day, isExtended, onCardClick }: Props) => {
    return (
        <Root $isExtended={isExtended} onClick={onCardClick}>
            {day}
        </Root>
    );
};

const Root = styled.div<{ $isExtended: boolean }>`
    border: 1px solid black;
    text-align: center;

    width: 100px;
    min-width: 100px;
    height: 700px;
    min-height: 700px;
    padding: 16px;

    overflow: hidden;
    cursor: pointer;
    transition: all ease 0.5s;
    will-change: width, min-width;

    ${({ $isExtended }) => $isExtended && css`width: 400px; min-width: 400px;`};

    ${({ $isExtended }) => respondTo.l`
        height: 550px;
        min-height: 550px;
        width: ${$isExtended ? '340px' : '60px'};
        min-width: ${$isExtended ? '340px' : '60px'}
  `};

    ${({ $isExtended }) => respondTo.m`
        height: 400px;
        min-height: 400px;
        width: ${$isExtended ? '320px' : '50px'};
        min-width: ${$isExtended ? '320px' : '50px'}
  `};
`;
