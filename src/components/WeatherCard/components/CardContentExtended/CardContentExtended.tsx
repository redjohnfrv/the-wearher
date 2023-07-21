import React from 'react';
import { styled } from 'styled-components';
import { OptionsListType } from 'api/dto/weather';
import { OptionBox } from './components';

type CardContentExtendedProps = {
    options: OptionsListType;
};

export const CardContentExtended = ({ options }: CardContentExtendedProps) => {
    return (
        <Root>
            {Object.entries(options).map(([_, value]) => (
                <OptionBox
                    key={value.value}
                    value={String(value.value)}
                    Icon={value?.icon}
                />
            ))}
        </Root>
    );
};

export const Root = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 12px;
    width: 100%;
`;
