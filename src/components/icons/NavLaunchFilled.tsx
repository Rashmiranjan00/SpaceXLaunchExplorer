import React from "react";
/* eslint-disable */
import Svg, { Path } from 'react-native-svg';
import { type IconProps } from './types';

const SvgComponent = (props: IconProps) => (
    <Svg
        xmlns="http://www.w3.org/2000/Svg"
        width={24}
        height={24}
        viewBox="0 0 32 32"
        fill="none">
        <Path
            fill={props.color}
            d="M25.555,18.703l-2.187-1.458C23.736,15.625,24,13.834,24,12c0-5.916-4.684-9.805-6.884-11.304
            c-0.675-0.461-1.557-0.461-2.232,0C12.684,2.195,8,6.084,8,12c0,2.019,0.207,3.795,0.509,5.327l-2.064,1.376
            C6.167,18.889,6,19.201,6,19.535v4.077c0,0.57,0.467,1.001,0.998,1.001c0.104,0,0.211-0.017,0.318-0.052l3.346-1.115
            C10.867,23.806,11,24,11,24l-0.561,1.684C10.223,26.331,10.705,27,11.388,27h9.225c0.683,0,1.164-0.669,0.949-1.316L21,24
            c0,0,0.105-0.203,0.277-0.574l3.407,1.136c0.106,0.035,0.213,0.052,0.318,0.052c0.531,0,0.998-0.43,0.998-1.001v-4.077
            C26,19.201,25.833,18.889,25.555,18.703z M16,16c-2.757,0-5-2.243-5-5s2.243-5,5-5s5,2.243,5,5S18.757,16,16,16z M18,11
            c0,1.103-0.897,2-2,2s-2-0.897-2-2c0-1.103,0.897-2,2-2S18,9.897,18,11z M16,7c-2.209,0-4,1.791-4,4c0,2.209,1.791,4,4,4
            c2.209,0,4-1.791,4-4C20,8.791,18.209,7,16,7z M16,14c-1.657,0-3-1.343-3-3s1.343-3,3-3s3,1.343,3,3S17.657,14,16,14z M11.837,28
            h8.326c0,1.223-0.307,2.318-0.58,3.052c-0.202,0.542-0.81,0.807-1.338,0.573c-0.089-0.039-0.182-0.081-0.279-0.126
            c-0.294-0.136-0.641-0.119-0.922,0.041c-0.157,0.089-0.3,0.167-0.424,0.231c-0.294,0.154-0.637,0.15-0.931-0.004
            c-0.266-0.14-0.623-0.339-1.007-0.585c-0.334,0.171-0.652,0.32-0.927,0.441c-0.527,0.233-1.136-0.033-1.337-0.573
            C12.144,30.318,11.837,29.223,11.837,28z"
        />
    </Svg>
);
export default SvgComponent;
