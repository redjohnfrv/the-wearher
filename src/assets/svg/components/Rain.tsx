import * as React from 'react';
import type { SVGProps } from 'react';
import { theme } from '../../styles/theme/theme';

export const RainIcon = ({
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
                '.rain_svg__st0,.rain_svg__st1{fill:none;stroke:#000;stroke-miterlimit:10}.rain_svg__st0{opacity:.2;stroke-width:5.000000e-02}.rain_svg__st1{stroke-width:2;stroke-linecap:round;stroke-linejoin:round}'
            }
        </style>
        <g id="rain_svg__Layer_2">
            <path
                fill={fill}
                d="M4 14c-.3 0-.5-.1-.7-.3-.9-.9-1.3-2-1.3-3.2C2 8 4 6 6.5 6h.6c.5-2.3 2.5-4 4.9-4s4.4 1.7 4.9 4h.6C20 6 22 8 22 10.5c0 1.2-.5 2.3-1.3 3.1-.4.4-1 .4-1.4 0-.4-.4-.4-1 0-1.4.5-.5.7-1.1.7-1.7C20 9.1 18.9 8 17.5 8H16c-.6 0-1-.4-1-1 0-1.7-1.3-3-3-3S9 5.3 9 7c0 .6-.4 1-1 1H6.5C5.1 8 4 9.1 4 10.5c0 .7.3 1.3.7 1.8.4.4.4 1 0 1.4-.2.2-.4.3-.7.3z"
            />
            <path
                fill={fill}
                d="M8 16c-.1 0-.3 0-.4-.1-.5-.2-.7-.8-.4-1.3l1-2c.2-.5.8-.7 1.3-.4.5.2.7.8.4 1.3l-1 2c-.2.3-.5.5-.9.5zM15 16c-.1 0-.3 0-.4-.1-.5-.2-.7-.8-.4-1.3l1-2c.2-.5.8-.7 1.3-.4.5.2.7.8.4 1.3l-1 2c-.2.3-.5.5-.9.5zM4 21c-.1 0-.3 0-.4-.1-.5-.2-.7-.8-.4-1.3l1-2c.2-.5.8-.7 1.3-.4.5.2.7.8.4 1.3l-1 2c-.2.3-.5.5-.9.5zM11 21c-.1 0-.3 0-.4-.1-.5-.2-.7-.8-.4-1.3l1-2c.2-.5.8-.7 1.3-.4.5.2.7.8.4 1.3l-1 2c-.2.3-.5.5-.9.5zM18 21c-.1 0-.3 0-.4-.1-.5-.2-.7-.8-.4-1.3l1-2c.2-.5.8-.7 1.3-.4.5.2.7.8.4 1.3l-1 2c-.2.3-.5.5-.9.5z"
            />
        </g>
    </svg>
);
