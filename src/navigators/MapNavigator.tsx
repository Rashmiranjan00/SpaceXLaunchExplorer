import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { mapRoutes } from "../shared/routes";
import { MapScreen } from "../screens/Map/index";

const MapStack = createNativeStackNavigator();

// Navigator for Maps Tab screens
// Other screens from separate tab can also be added as per requirement
const MapNavigator = () => (
    <MapStack.Navigator screenOptions={{ headerShown: false }}>
        <MapStack.Screen name={mapRoutes.home} component={MapScreen} />
    </MapStack.Navigator>
);

export default MapNavigator;
