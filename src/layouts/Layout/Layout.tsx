import React, { ReactNode } from 'react';
import { styled } from 'styled-components';
import { styleMixin } from '../../assets/styles/mixins';
import { Header } from '../Header';

type Props = {
    children: ReactNode;
};

export const Layout = ({ children }: Props) => {
    return (
        <Root>
            <Header />
            <ContentWrapper>{children}</ContentWrapper>
        </Root>
    );
};

const Root = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    min-height: 480px;
    min-width: 768px;

    ${styleMixin.mainGradient};
`;

const ContentWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
  
`;
