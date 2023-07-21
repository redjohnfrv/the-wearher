import React from 'react';
import { styled } from 'styled-components';
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

const Root = styled.div`
    position: relative;
    display: flex;
    align-items: flex-start;
    gap: 18px;

    &:first-of-type {
        margin-bottom: 30px;

        &:after {
            content: '';
            position: absolute;
            bottom: -12px;
            left: 0;
            height: 1px;
            width: 80%;

            ${({theme: {colors}}) => `background-color: ${colors.default.darkBlue};`};
        }
    }
`;

const Value = styled.p`
    ${({ theme: { colors } }) => `color: ${colors.default.darkBlue}`};

    ${() => typography.optionValue};
`;
