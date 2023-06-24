import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { mapRoutes } from "../shared/routes";
import { MapScreen } from "../screens/Map/index";

const MapStack = createNativeStackNavigator();

const MapNavigator = () => (
    <MapStack.Navigator screenOptions={{ headerShown: false }}>
        <MapStack.Screen name={mapRoutes.home} component={MapScreen} />
    </MapStack.Navigator>
);

export default MapNavigator;
