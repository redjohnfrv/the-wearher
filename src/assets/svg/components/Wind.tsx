import * as React from 'react';
import type { SVGProps } from 'react';
import { theme } from 'assets/styles/theme/theme';

export const WindIcon = ({
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
                `.wind_svg__st0,.wind_svg__st1{fill:none;stroke:${fill};stroke-miterlimit:10}.wind_svg__st0{opacity:.2;stroke-width:5.000000e-02}.wind_svg__st1{stroke-width:2;stroke-linecap:round;stroke-linejoin:round}`
            }
        </style>
        <g id="wind_svg__Layer_2">
            <path fill={fill} d="M19 10h-7c-1.7 0-3-1.3-3-3s1.3-3 3-3c.9 0 1.7.4 2.2 1 .4.4.3 1-.1 1.4-.4.4-1 .3-1.4-.1-.1-.2-.4-.3-.7-.3-.6 0-1 .4-1 1s.4 1 1 1h7c.6 0 1 .4 1 1s-.4 1-1 1zM9 17c-1.7 0-3-1.3-3-3s1.3-3 3-3h12c.6 0 1 .4 1 1s-.4 1-1 1H9c-.6 0-1 .4-1 1s.4 1 1 1c.3 0 .6-.1.7-.3.4-.4 1-.4 1.4-.1.4.4.4 1 .1 1.4-.5.6-1.3 1-2.2 1z" />
            <path fill={fill} d="M16 20c-1.7 0-3-1.3-3-3s1.3-3 3-3h4c.6 0 1 .4 1 1s-.4 1-1 1h-4c-.6 0-1 .4-1 1s.4 1 1 1c.3 0 .6-.1.8-.4.3-.4 1-.5 1.4-.2.4.3.5 1 .2 1.4-.6.8-1.5 1.2-2.4 1.2z" />
            <circle fill={fill} cx={4.5} cy={8.5} r={0.5} />
            <circle fill={fill} cx={6.5} cy={5.5} r={0.5} />
            <circle fill={fill} cx={2.5} cy={6.5} r={0.5} />
            <circle fill={fill} cx={4.5} cy={15.5} r={0.5} />
            <circle fill={fill} cx={2.5} cy={17.5} r={0.5} />
            <circle fill={fill} cx={6.5} cy={18.5} r={0.5} />
            <circle fill={fill} cx={2.5} cy={13.5} r={0.5} />
            <circle fill={fill} cx={2.5} cy={10.5} r={0.5} />
        </g>
    </svg>
);
