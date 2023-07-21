import * as React from 'react';
import type { SVGProps } from 'react';
import { theme } from '../../styles/theme/theme';

export const NightIcon = ({
    width = 24,
    height = 24,
    fill = theme.sunny.colors.default.darkBlue,
    ...props
}: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlSpace="preserve"
        width={width}
        height={height}
        viewBox="0 0 24 24"
        {...props}
    >
        <style>
            {
                '.night_svg__st0,.night_svg__st1{fill:none;stroke:#000;stroke-miterlimit:10}.night_svg__st0{opacity:.2;stroke-width:5.000000e-02}.night_svg__st1{stroke-width:2;stroke-linecap:round;stroke-linejoin:round}'
            }
        </style>
        <path
            fill={fill}
            id="night_svg__Layer_2"
            d="M21.4 10.8c-.3-.3-.7-.3-1.1-.1-.4.2-.8.3-1.3.3-1.7 0-3-1.3-3-3 0-.9.4-1.7 1-2.2.3-.3.4-.6.3-1-.1-.4-.4-.6-.8-.7H16c-3 0-5.4 2.2-5.9 5-1.9.2-3.4 1.6-3.8 3.6h-.9c-1.3 0-2.6.8-3.1 2.2-.2.3-.3.8-.3 1.3v.1c0 2 1.5 3.7 3.4 3.7h10.2c1.9 0 3.4-1.7 3.4-3.7v-.1c0-.3 0-.6-.1-.9 1.3-.7 2.3-1.9 2.8-3.3.1-.5 0-.9-.3-1.2zm-7.1-4.4c-.2.5-.3 1-.3 1.6 0 2.6 2.1 4.8 4.7 5-.2.2-.5.4-.8.5 0 0-.1 0-.1-.1l-.2-.2c-.1-.1-.3-.2-.4-.3-.1 0-.1-.1-.2-.1-.1-.1-.3-.1-.5-.2-.1 0-.1 0-.2-.1-.2-.1-.5-.1-.7-.1h-.9c-.3-1.2-1-2.3-2-2.9-.1-.1-.3-.2-.5-.3h-.1s-.1 0-.1-.1c.3-1.1 1.1-2.2 2.3-2.7zm2.7 9.9c0 .9-.6 1.7-1.4 1.7H5.4c-.8 0-1.4-.8-1.4-1.7v-.1c0-.2 0-.5.1-.7.2-.6.7-.9 1.3-.9h1.8c.6 0 1-.4 1-1 0-1.4 1-2.6 2.3-2.6h.5c.1 0 .2.1.4.1h.1c.1 0 .1.1.2.1.7.5 1.2 1.3 1.2 2.3 0 .6.4 1 1 1h1.8c.4 0 .8.2 1.1.6 0 0 0 .1.1.1.2.3.3.6.3.9v.2z"
        />
    </svg>
);
