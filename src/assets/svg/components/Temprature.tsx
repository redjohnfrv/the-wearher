import * as React from 'react';
import type { SVGProps } from 'react';
import { theme } from '../../styles/theme/theme';

export const TempratureIcon = ({
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
                '.temprature_svg__st0,.temprature_svg__st1{fill:none;stroke:#000;stroke-miterlimit:10}.temprature_svg__st0{opacity:.2;stroke-width:5.000000e-02}.temprature_svg__st1{stroke-width:2;stroke-linecap:round;stroke-linejoin:round}'
            }
        </style>
        <g id="temprature_svg__Layer_2">
            <path
                fill={fill}
                d="M15 21c-3.3 0-6-2.7-6-6V9c0-3.3 2.7-6 6-6s6 2.7 6 6c0 .6-.4 1-1 1s-1-.4-1-1c0-2.2-1.8-4-4-4s-4 1.8-4 4v6c0 2.2 1.8 4 4 4s4-1.8 4-4c0-.6.4-1 1-1s1 .4 1 1c0 3.3-2.7 6-6 6zM5.5 8C4.1 8 3 6.9 3 5.5S4.1 3 5.5 3 8 4.1 8 5.5 6.9 8 5.5 8zm0-3c-.3 0-.5.2-.5.5s.2.5.5.5.5-.2.5-.5-.2-.5-.5-.5z"
            />
        </g>
    </svg>
);
