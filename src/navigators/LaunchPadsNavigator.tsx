import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { launchPadsRoutes } from "../shared/routes";
import { LaunchPadsScreen } from "../screens/LaunchPads/index";

const LaunchPadsStack = createNativeStackNavigator();

const LaunchPadsNavigator = () => (
    <LaunchPadsStack.Navigator screenOptions={{ headerShown: false }}>
        <LaunchPadsStack.Screen
            name={launchPadsRoutes.home}
            component={LaunchPadsScreen}
        />
    </LaunchPadsStack.Navigator>
);

export default LaunchPadsNavigator;
