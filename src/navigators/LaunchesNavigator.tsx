import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { launchesRoutes } from "../shared/routes";
import { LaunchesScreen } from "../screens/Launches/index";

const LaunchPadsStack = createNativeStackNavigator();

const LaunchPadsNavigator = () => (
    <LaunchPadsStack.Navigator screenOptions={{ headerShown: false }}>
        <LaunchPadsStack.Screen
            name={launchesRoutes.home}
            component={LaunchesScreen}
        />
    </LaunchPadsStack.Navigator>
);

export default LaunchPadsNavigator;
