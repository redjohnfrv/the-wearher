import { styleMixin } from 'assets/styles/mixins';
import { theme } from 'assets/styles/theme/theme';
import React from 'react';
import { keyframes, styled } from 'styled-components';

type LoaderProps = {
    className?: string;
};

export const Loader = ({ className }: LoaderProps) => {
    return (
        <Root className={className}>
            <Inner />
        </Root>
    );
};

const loaderAnimation = keyframes`
    to {
      transform: rotate(360deg);
    }
  `;

const Root = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    margin: 0 auto;
    border-radius: 50%;

    animation: ${loaderAnimation} 1s linear infinite;

    background-image: linear-gradient(
        to bottom,
        ${theme.rainy.colors.default.darkBlue},
        ${theme.rainy.colors.default.blue}
    );
`;

const Inner = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;

    ${({ theme: { colors } }) => `background-color: ${colors.default.blue};`}
`;
