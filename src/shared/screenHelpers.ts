import { Dimensions } from "react-native";
import { tabletBreakpoint } from "../util/Sizes";

export const checkDeviceIsTablet = (): boolean => {
    const screen = Dimensions.get("screen");
    const isTablet =
        screen.width > parseInt(tabletBreakpoint.replace("px", ""), 10);
    return isTablet;
};
