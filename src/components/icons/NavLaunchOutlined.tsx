import type React from "react";
import { withTheme } from "styled-components";
import CreateIcon, { type IconProps } from "./CreateIcon";
import LaunchOutlined from "./svgs/LaunchOutlined.svg";

const NavLaunchOutlined: React.FC<IconProps> = ({ size = 24, ...props }) =>
    CreateIcon(LaunchOutlined)({ size, ...props });

export default withTheme(NavLaunchOutlined);
