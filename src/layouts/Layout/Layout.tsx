import React, { ReactNode, useContext } from 'react';
import { RuleSet, styled } from 'styled-components';
import { styleMixin } from '../../assets/styles/mixins';
import { Header } from '../Header';
import { ThemeContext } from '../../providers/ThemeProvider';

type Props = {
    children: ReactNode;
};

export const Layout = ({ children }: Props) => {
    const theme = useContext(ThemeContext);
    const mixin =
        theme?.theme === 'sunny'
            ? styleMixin.sunny.mainGradient
            : styleMixin.rainy.mainGradient;

    return (
        <Root $mixin={mixin}>
            <InnerWrapper>
                <Header />
                <ContentWrapper>{children}</ContentWrapper>
            </InnerWrapper>
        </Root>
    );
};

const Root = styled.div<{ $mixin: RuleSet<object> }>`
    width: 100%;
    height: 100%;
    min-height: 480px;
    min-width: 768px;

    ${({ $mixin }) => $mixin};
`;

const InnerWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 1024px;
    height: 100%;
    min-height: 480px;
    margin: 0 auto;
`;

const ContentWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;
