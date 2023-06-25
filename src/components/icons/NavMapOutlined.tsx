import type React from "react";
import { withTheme } from "styled-components";
import CreateIcon, { type IconProps } from "./CreateIcon";
import MapOutlined from "./svgs/MapOutlined.svg";

const NavMapOutlined: React.FC<IconProps> = ({
    size = 24,
    viewBox = "0 0 92.26 122.88",
    ...props
}) => CreateIcon(MapOutlined)({ size, viewBox, ...props });

export default withTheme(NavMapOutlined);
