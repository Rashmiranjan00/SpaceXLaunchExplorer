/* eslint-disable react/no-unused-prop-types */
import React, { type FC } from "react";
import { type SvgProps } from "react-native-svg";
import { Colors, DeviceTheme, type Theme } from "../../util/Theme";

const defaultIconSize = 32;

const defaultViewBox = "0 0 32 32";

export function getDefaultIconColor(deviceTheme: DeviceTheme) {
    switch (deviceTheme) {
        case DeviceTheme.Dark:
            return Colors.gray_10;
        case DeviceTheme.Light:
        default:
            return Colors.gray_90;
    }
}

export interface IconProps {
    size?: number;
    height?: number;
    width?: number;
    color?: (typeof Colors)[keyof typeof Colors];
    viewBox?: string;
    style?: object;
    theme?: Theme;
}

export const getHeight = (props: IconProps) => {
    return props.height ?? props.size ?? defaultIconSize;
};

export const getWidth = (props: IconProps) => {
    return props.width ?? props.size ?? defaultIconSize;
};

export const getFill = (props: IconProps) => {
    return props.color ?? getDefaultIconColor(props.theme?.mode);
};

export const getViewBox = (props: IconProps) => {
    return props.viewBox ?? defaultViewBox;
};

export const getStyle = (props: IconProps) => {
    return props.style ?? {};
};

export const CreateIcon = (SvgComponent: FC<SvgProps>) => (props: IconProps) =>
    (
        <SvgComponent
            style={getStyle(props)}
            fill={getFill(props)}
            height={getHeight(props)}
            width={getWidth(props)}
            viewBox={getViewBox(props)}
        />
    );

export default CreateIcon;
