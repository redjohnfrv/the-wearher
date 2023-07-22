import React from 'react';
import { styled } from 'styled-components';
import { OptionsListType } from 'api/dto/weather';
import { NoData, OptionBox } from 'ui';

type CardContentExtendedProps = {
    options: OptionsListType;
};

export const CardContentExtended = ({ options }: CardContentExtendedProps) => {
    const optionsList = Object.entries(options);
    const hasData = optionsList?.length > 1;

    return (
        <Root>
            {optionsList.map(([_, value]) => {
                return (
                    <OptionBox
                        key={value.value}
                        value={String(value.value)}
                        Icon={value?.icon}
                    />
                );
            })}

            {!hasData && <NoData />}
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
