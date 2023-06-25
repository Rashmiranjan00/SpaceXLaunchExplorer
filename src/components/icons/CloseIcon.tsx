/* eslint-disable */
import React from 'react';
import { SvgXml } from 'react-native-svg';
import { type IconProps } from './types';
import { Colors, DeviceTheme, Theme } from '../../util/Theme';
import colorScheme from '../../hooks/colorScheme';

const CloseIcon = (): React.ReactElement => {
    const displayMode = colorScheme();
    const svgMarkup = `<svg
        xmlns="http://www.w3.org/2000/Svg"
        width={32}
        height={32}
        viewBox="0 0 32 32">
        <path d="M24 9.4L22.6 8L16 14.6L9.4 8L8 9.4L14.6 16L8 22.6L9.4 24L16 17.4L22.6 24L24 22.6L17.4 16L24 9.4Z" fill=${
            displayMode === DeviceTheme.Light ? Colors.gray_90 : Colors.gray_10
        }/>
  </svg>  
  `;
    return <SvgXml xml={svgMarkup} />;
};

export default CloseIcon;
