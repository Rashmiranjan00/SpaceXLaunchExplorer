import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
    type BottomTabNavigationOptions,
    createBottomTabNavigator
} from "@react-navigation/bottom-tabs";

import { useTheme } from "styled-components";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import MapNavigator from "./MapNavigator";
import LaunchesNavigator from "./LaunchesNavigator";
import { tabRoutes, mainRoutes } from "../shared/routes";
import colorScheme from "../hooks/colorScheme";
import { isTablet } from "../util/ScreenHelper";
import { DeviceTheme } from "../util/Theme";
import {
    NavLaunchFilled,
    NavLaunchOutlined,
    NavMapFilled,
    NavMapOutlined
} from "../components/icons";

const MainContentStack = createNativeStackNavigator();

const MainContentNavigator = () => {
    return (
        <MainContentStack.Navigator
            screenOptions={{
                headerShown: false
            }}>
            <MainContentStack.Screen
                name={mainRoutes.root}
                component={BottomTabNavigator}
                options={{ headerShown: false }}
            />
        </MainContentStack.Navigator>
    );
};

export const createTabOptionStyle = (
    isTabletScreen: boolean
): Pick<
    BottomTabNavigationOptions,
    "tabBarIconStyle" | "tabBarLabelStyle" | "tabBarLabelPosition"
> => ({
    tabBarIconStyle: {
        padding: 0,
        marginTop: isTabletScreen ? -2 : 0
    },
    tabBarLabelStyle: {
        fontFamily: "TTCommons-Medium",
        fontWeight: "400",
        fontSize: 12,
        marginTop: isTabletScreen ? -2 : -8
    },
    tabBarLabelPosition: isTabletScreen ? "beside-icon" : "below-icon"
});

const BottomTab = createBottomTabNavigator();

export function BottomTabNavigator() {
    const displayMode = colorScheme();
    const theme = useTheme();
    const isTabletScreen = isTablet();
    const tabOptionStyle = createTabOptionStyle(isTabletScreen);
    const { bottom } = useSafeAreaInsets();

    const getTabBarBorderColor = deviceMode => {
        return deviceMode === DeviceTheme.Dark
            ? theme.colors.white_transparent_10
            : theme.colors.gray_transparent_10;
    };

    return (
        <BottomTab.Navigator
            initialRouteName={tabRoutes.launchTab}
            screenOptions={
                /* istanbul ignore next */
                ({ navigation }) => ({
                    tabBarActiveTintColor: theme.core.content_primary,
                    tabBarInactiveTintColor: theme.core.content_secondary,
                    headerShown: false,
                    tabBarHideOnKeyboard: true,
                    tabBarStyle: {
                        display: "flex",
                        backgroundColor: theme.core.background_primary,
                        marginBottom: 0,
                        paddingTop: 0,
                        elevation: 0,
                        /* istanbul ignore next */
                        paddingBottom: isTabletScreen ? bottom : bottom + 2,
                        height: 48 + bottom,
                        borderTopWidth: 0.5,
                        /* istanbul ignore next */
                        borderTopColor: getTabBarBorderColor(displayMode)
                    },
                    tabBarItemStyle: {
                        borderTopWidth: navigation.isFocused() ? 2 : 0.5,
                        paddingTop: navigation.isFocused() ? 0 : 1.5,
                        borderColor: navigation.isFocused()
                            ? theme.core.content_primary
                            : getTabBarBorderColor(displayMode)
                    }
                })
            }>
            <BottomTab.Screen
                name={tabRoutes.launchTab}
                component={LaunchesNavigator}
                options={
                    {
                        title: "Launches",
                        headerShown: false,
                        tabBarAllowFontScaling: false,
                        ...tabOptionStyle,
                        /* eslint-disable-next-line react/no-unstable-nested-components */
                        tabBarIcon: props =>
                            props.focused ? (
                                <NavLaunchFilled
                                    color={theme.NavBar.icon_fill_color}
                                />
                            ) : (
                                <NavLaunchOutlined
                                    color={theme.NavBar.icon_outline_color}
                                />
                            )
                    } as BottomTabNavigationOptions
                }
            />

            <BottomTab.Screen
                name={tabRoutes.mapTab}
                component={MapNavigator}
                options={
                    {
                        title: "Map",
                        tabBarTestID: "EquipmentBottomTabButton",
                        headerShown: false,
                        tabBarAllowFontScaling: false,
                        ...tabOptionStyle,
                        /* eslint-disable-next-line react/no-unstable-nested-components */
                        tabBarIcon: props =>
                            props.focused ? (
                                <NavMapFilled
                                    color={theme.NavBar.icon_fill_color}
                                />
                            ) : (
                                <NavMapOutlined
                                    color={theme.NavBar.icon_outline_color}
                                />
                            )
                    } as BottomTabNavigationOptions
                }
            />
        </BottomTab.Navigator>
    );
}

export default MainContentNavigator;
