/* eslint-disable */
import React from 'react';
import { SvgXml } from 'react-native-svg';
import { type IconProps } from './types';
import { Colors, DeviceTheme, Theme } from '../../util/Theme';
import colorScheme from '../../hooks/colorScheme';

const BackIcon = (): React.ReactElement => {
    const displayMode = colorScheme();
    const svgMarkup = `<svg
        xmlns="http://www.w3.org/2000/Svg"
        width={32}
        height={32}
        viewBox="0 0 32 32">
        <path d="M9 16L19 6L20.4 7.4L11.8 16L20.4 24.6L19 26L9 16Z" fill=${
            displayMode === DeviceTheme.Light ? Colors.gray_90 : Colors.gray_10
        }/>
  </svg>  
  `;
    return <SvgXml xml={svgMarkup} />;
};

export default BackIcon;
