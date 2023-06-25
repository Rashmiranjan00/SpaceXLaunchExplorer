import type React from "react";
import { withTheme } from "styled-components";
import CreateIcon, { type IconProps } from "./CreateIcon";
import CloseSVG from "./svgs/Close.svg";

const CloseIcon: React.FC<IconProps> = ({ ...props }) =>
    CreateIcon(CloseSVG)({ ...props });

export default withTheme(CloseIcon);
