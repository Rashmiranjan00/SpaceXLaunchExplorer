import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import routes from "../shared/routes";
import MainContentNavigator from "./MainContentNavigator";

const AppStack = createNativeStackNavigator();

interface AppNavigatorProps {
    initialRouteName: string;
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
function AppNavigator({ initialRouteName }: AppNavigatorProps) {
    return (
        <AppStack.Navigator
            initialRouteName={initialRouteName}
            screenOptions={{ headerShown: false }}>
            <AppStack.Group screenOptions={{ animation: "slide_from_right" }}>
                <AppStack.Screen
                    name={routes.main.home}
                    component={MainContentNavigator}
                />
            </AppStack.Group>
        </AppStack.Navigator>
    );
}

export default AppNavigator;
