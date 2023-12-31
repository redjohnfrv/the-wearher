import React from 'react';
import { css, styled } from 'styled-components';
import { respondTo } from 'services/respondTo';
import { CardHeader, CardContentExtended } from './components';
import { OptionsListType } from 'api/dto/weather';

type Props = {
    day: string;
    options: OptionsListType;
    isExtended: boolean;
    onCardClick: () => void;
};

export const WeatherCard = ({ day, options, isExtended, onCardClick }: Props) => {
    const shortDay = day.slice(0, 2);

    return (
        <Root $isExtended={isExtended} onClick={onCardClick}>
            <CardHeader title={isExtended ? day : shortDay} />
            
            {isExtended && <CardContentExtended options={options} />}
        </Root>
    );
};

const Root = styled.div<{ $isExtended: boolean }>`
    width: 100px;
    min-width: 100px;
    height: 700px;
    min-height: 700px;
    padding: 16px;
    text-align: center;
    overflow: hidden;
    cursor: pointer;
    transition: all ease 0.5s;
    will-change: width, min-width, transform;

    ${({ theme: { colors } }) =>
        `background-image: linear-gradient(
                to bottom,
                ${colors.default.blue},
                ${colors.grayscale[100]},
                ${colors.default.darkBlue}
            );`};

    ${({ theme: { colors } }) =>
        `border: 1px solid ${colors.default.darkBlue}`};

    border-right: none;

    &:last-of-type {
        border-top-right-radius: 12px;
        border-bottom-right-radius: 12px;

        ${({ theme: { colors } }) =>
            `border-right: 1px solid ${colors.default.darkBlue}`};
    }

    &:first-of-type {
        border-top-left-radius: 12px;
        border-bottom-left-radius: 12px;
    }

    &:hover {
        ${({ $isExtended }) => !$isExtended && `transform: scale(1.07, 1)`};
    }

    ${({ $isExtended }) =>
        $isExtended &&
        css`
            width: 400px;
            min-width: 400px;
        `};

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
