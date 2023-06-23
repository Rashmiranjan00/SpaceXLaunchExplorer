/*

Color Scheme hook for dark mode/light mode based on device settings, including change listeners.

Extracted functionality to this file such that if we ever need to expand upon the functionality of light/dark
mode management, we can do so here and return the values from a centralised location.

Returns "light", "dark", or null if unavailable.

Available on iOS 13+ and Android 10+ (API level 29)

*/

import { useColorScheme } from "react-native";
import { type DeviceTheme } from "../util/Theme";

const colorScheme = (): DeviceTheme => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return useColorScheme() as DeviceTheme;
};

export default colorScheme;
