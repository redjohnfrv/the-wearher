import React from 'react';
import { keyframes, styled } from 'styled-components';
import { typography } from 'assets/styles/typography';

type OptionBoxProps = {
    value: string;
    Icon?: JSX.Element;
};

export const OptionBox = ({ value, Icon }: OptionBoxProps) => {
    return (
        <Root>
            {Icon && Icon}
            <Value>{value}</Value>
        </Root>
    );
};

const appearAnimation = keyframes`
    to {
      width: 100%;
      opacity: 1;
    }
  `;

const Root = styled.div`
    position: relative;
    display: flex;
    align-items: flex-start;
    gap: 18px;
    width: 0;
    opacity: 0;
    overflow: hidden;
    white-space: nowrap;

    animation: ${appearAnimation} 0.6s linear forwards;

    &:first-of-type {
        margin-bottom: 30px;
    }
`;

const Value = styled.p`
    ${({ theme: { colors } }) => `color: ${colors.default.darkBlue}`};

    ${() => typography.optionValue};
`;
