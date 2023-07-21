import * as React from 'react';
import type { SVGProps } from 'react';
import { theme } from '../../styles/theme/theme';

export const SunIcon = ({
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
                '.sun_svg__st0,.sun_svg__st1{fill:none;stroke:#000;stroke-miterlimit:10}.sun_svg__st0{opacity:.2;stroke-width:5.000000e-02}.sun_svg__st1{stroke-width:2;stroke-linecap:round;stroke-linejoin:round}'
            }
        </style>
        <path
            fill={fill}
            id="sun_svg__Layer_2"
            d="M20 11h-2.1c-.2-.9-.5-1.8-1-2.5 0 0 .1 0 .1-.1L18.4 7c.4-.4.4-1 0-1.4s-1-.4-1.4 0L15.6 7s0 .1-.1.1c-.7-.5-1.6-.9-2.5-1V4c0-.6-.4-1-1-1s-1 .4-1 1v2.1c-.9.2-1.8.5-2.5 1 0 0 0-.1-.1-.1L7.1 5.6c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l1.4 1.4s.1 0 .1.1c-.5.7-.9 1.6-1 2.5H4c-.6 0-1 .4-1 1s.4 1 1 1h2.1c.2.9.5 1.8 1 2.5 0 0-.1 0-.1.1L5.6 17c-.4.4-.4 1 0 1.4.2.2.5.3.7.3s.5-.1.7-.3L8.4 17s0-.1.1-.1c.7.5 1.6.9 2.5 1V20c0 .6.4 1 1 1s1-.4 1-1v-2.1c.9-.2 1.8-.5 2.5-1 0 0 0 .1.1.1l1.4 1.4c.2.2.5.3.7.3s.5-.1.7-.3c.4-.4.4-1 0-1.4L17 15.6s-.1 0-.1-.1c.5-.7.9-1.6 1-2.5H20c.6 0 1-.4 1-1s-.4-1-1-1zm-8 5c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z"
        />
    </svg>
);
