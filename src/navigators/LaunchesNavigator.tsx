import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { launchesRoutes } from "../shared/routes";
import { LaunchesScreen } from "../screens/Launches/index";
import { LaunchDetailsScreen } from "../screens/LaunchDetails";

const LaunchPadsStack = createNativeStackNavigator();

// Navigator for Launches Tab screens
// Other screens from separate tab can also be added as per requirement
const LaunchesNavigator = () => (
    <LaunchPadsStack.Navigator screenOptions={{ headerShown: false }}>
        <LaunchPadsStack.Screen
            name={launchesRoutes.home}
            component={LaunchesScreen}
        />
        <LaunchPadsStack.Screen
            name={launchesRoutes.launchDetails}
            component={LaunchDetailsScreen}
        />
    </LaunchPadsStack.Navigator>
);

export default LaunchesNavigator;
