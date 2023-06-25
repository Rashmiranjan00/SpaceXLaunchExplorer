import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { launchesRoutes } from "../shared/routes";
import { LaunchesScreen } from "../screens/Launches/index";
import { LaunchDetailsScreen } from "../screens/LaunchDetails";

const LaunchPadsStack = createNativeStackNavigator();

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
