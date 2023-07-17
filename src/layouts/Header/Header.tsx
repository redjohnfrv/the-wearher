import React from 'react';
import { styled } from 'styled-components';
import weather from '../../assets/images/weather.png';
import { colors } from '../../assets/styles/colors';
import { typography } from '../../assets/styles/typography';
import { respondTo } from '../../services/respondTo';

export const Header = () => {
    return (
        <Root>
            <img src={weather} alt="weather logo" />

            <p>Weather App</p>
        </Root>
    );
};

const Root = styled.header`
    display: flex;
    gap: 12px;
    align-items: center;
    align-self: flex-start;
    width: 100%;
    height: 120px;
    margin-bottom: 24px;

    & img {
        width: 100px;
        height: 100px;
    }

    & p {
        color: ${colors.default.darkBlue};

        ${typography.logo};
    }

    ${respondTo.m`
        justify-content: center;
        margin-bottom: 12px;

        & img {
            width: 80px;
            height: 80px;
        }

        & p {
            ${typography.normal};
        };
    `};
`;
