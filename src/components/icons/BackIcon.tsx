import type React from "react";
import { withTheme } from "styled-components";
import CreateIcon, { type IconProps } from "./CreateIcon";
import BackSVG from "./svgs/Back.svg";

const BackIcon: React.FC<IconProps> = ({ ...props }) =>
    CreateIcon(BackSVG)({ ...props });

export default withTheme(BackIcon);
