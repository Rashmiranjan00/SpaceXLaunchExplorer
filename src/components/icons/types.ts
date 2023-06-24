import { type Colors, type Theme } from "../../util/Theme";

export interface IconProps {
    size?: number;
    height?: number;
    width?: number;
    color?: (typeof Colors)[keyof typeof Colors];
    viewBox?: string;
    style?: object;
    theme?: Theme;
}
