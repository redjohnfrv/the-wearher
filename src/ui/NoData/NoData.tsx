import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import { typography } from 'assets/styles/typography';
import { Loader } from 'ui';

export const NoData = () => {
    const [isShowLoader, setShowLoader] = useState(true);

    const noDataText = 'This free API cannot provide the data ...';

    useEffect(() => {
        setTimeout(() => {
            setShowLoader(false);
        }, 1500);
    }, []);

    return <Root>{isShowLoader ? <Loader /> : noDataText}</Root>;
};

const Root = styled.div`
    width: 100%;
    padding: 32px;
    text-align: center;
    ${({ theme: { colors } }) => `color: ${colors.additional.danger};`};

    ${() => typography.normal};
`;
