import { css } from 'styled-components';
import { colors } from '../colors';

export const styleMixin = {
    mainGradient: css`
        background-image: linear-gradient(
            to bottom,
            ${colors.default.blue},
            ${colors.grayscale[100]},
            ${colors.default.gold}
        );
    `,
};
