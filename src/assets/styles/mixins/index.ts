import { css } from 'styled-components';
import { theme } from '../theme/theme';

export const styleMixin = {
    sunny: {
        mainGradient: css`
            background-image: linear-gradient(
                to bottom,
                ${theme.sunny.colors.default.blue},
                ${theme.sunny.colors.grayscale[100]},
                ${theme.sunny.colors.default.gold}
            );
        `,
    },
    rainy: {
        mainGradient: css`
            background-image: linear-gradient(
                to bottom,
                ${theme.rainy.colors.default.blue},
                ${theme.rainy.colors.grayscale[100]},
                ${theme.rainy.colors.default.gold}
            );
        `,
    },
};
