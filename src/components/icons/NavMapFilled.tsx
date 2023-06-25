import type React from "react";
import { withTheme } from "styled-components";
import CreateIcon, { type IconProps } from "./CreateIcon";
import MapFilled from "./svgs/MapFilled.svg";

const NavMapFilled: React.FC<IconProps> = ({
    size = 24,
    viewBox = "0 0 92.26 122.88",
    ...props
}) => CreateIcon(MapFilled)({ size, viewBox, ...props });

export default withTheme(NavMapFilled);
