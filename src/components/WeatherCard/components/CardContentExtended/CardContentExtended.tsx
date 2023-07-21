import React from 'react';
import { TempratureIcon } from '../../../../assets/svg/components';
import { styled } from 'styled-components';

export const CardContentExtended = () => {
    return (
        <Root>
            <TempratureIcon />
        </Root>
    );
};

export const Root = styled.div`
    display: flex;
    justify-content: flex-start;
    width: 100%;
`;
