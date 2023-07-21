import * as React from 'react';
import type { SVGProps } from 'react';
import { theme } from '../../styles/theme/theme';

export const CloudyIcon = ({
    width = 40,
    height = 40,
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
                '.cloudy_svg__st0,.cloudy_svg__st1{fill:none;stroke:#000;stroke-miterlimit:10}.cloudy_svg__st0{opacity:.2;stroke-width:5.000000e-02}.cloudy_svg__st1{stroke-width:2;stroke-linecap:round;stroke-linejoin:round}'
            }
        </style>
        <path
            fill={fill}
            id="cloudy_svg__Layer_2"
            d="M18.4 11.4h-1c-.3-1.3-1-2.4-2.1-3.1-.5-.3-1-.5-1.5-.6-.5-1.6-2-2.7-3.8-2.7-1.9 0-3.6 1.4-4 3.2h-.8C3.5 8.2 2 9.7 2 11.5v.2c0 1.4.8 2.6 2 3.1v.5c0 2 1.6 3.7 3.6 3.7h10.9c2 0 3.6-1.7 3.6-3.7v-.2c-.1-2-1.7-3.7-3.7-3.7zM4 11.5c0-.7.6-1.3 1.2-1.3h1.6c.6 0 1-.4 1-1C7.9 8 8.8 7 10 7c.7 0 1.3.3 1.7.9 0 0-.1 0-.1.1h-.3c-.2.1-.3.1-.4.2-.1 0-.1.1-.2.1-.2.1-.3.2-.5.3 0 0-.1 0-.1.1-.2.2-.3.4-.5.5 0 .1-.1.1-.1.2-.1.1-.2.3-.3.4 0 .1-.1.1-.1.2-.1.1-.2.3-.2.5 0 .1-.1.1-.1.2-.1.2-.2.5-.2.7h-1c-.3 0-.5 0-.7.1h-.2c-.2.1-.5.1-.7.3 0 0-.1 0-.1.1-.2.1-.4.2-.5.4 0 0-.1 0-.1.1l-.5.5-.1.1c-.4-.3-.7-.8-.7-1.3v-.2zm16 3.8c0 .9-.7 1.7-1.6 1.7H7.6c-.9 0-1.6-.8-1.6-1.7v-.2c0-.2 0-.5.1-.7.3-.6.8-1 1.4-1h1.9c.6 0 1-.4 1-1 0-1.5 1.1-2.7 2.6-2.7.4 0 .9.1 1.3.4.8.5 1.3 1.4 1.3 2.4 0 .6.4 1 1 1h1.9c.9 0 1.6.8 1.6 1.7v.1z"
        />
    </svg>
);
