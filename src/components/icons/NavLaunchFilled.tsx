import type React from "react";
import { withTheme } from "styled-components";
import CreateIcon, { type IconProps } from "./CreateIcon";
import LaunchFilled from "./svgs/LaunchFilled.svg";

const NavLaunchFilled: React.FC<IconProps> = ({ size = 24, ...props }) =>
    CreateIcon(LaunchFilled)({ size, ...props });

export default withTheme(NavLaunchFilled);
