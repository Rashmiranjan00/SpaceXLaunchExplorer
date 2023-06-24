/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState, useEffect, useRef } from "react";
import { AppState, ActivityIndicator } from "react-native";

// Packages
import { ApolloProvider, type ApolloClient } from "@apollo/client";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";

// Utils
import { getApolloClient } from "./src/apollo/ApolloClient";
import { DeviceTheme, getTheme } from "./src/util/Theme";
import colorScheme from "./src/hooks/colorScheme";
import store, { persistor } from "./src/redux/store";
import AppContent from "./AppContent";

function App(): JSX.Element {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [client, setClient] = useState<ApolloClient<any>>();
    const appState = useRef(AppState.currentState);
    const scheme = colorScheme();
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    const currentTheme = getTheme(scheme || DeviceTheme.Light);
    const [activeTheme, setActiveTheme] = useState(currentTheme);
    const [canAutoChangeTheme, setCanAutoChangeTheme] = useState(true);

    useEffect(() => {
        getApolloClient()
            .then(setClient)
            .catch(e => {
                // eslint-disable-next-line no-console
                console.log(e);
            });
    }, []);

    /*
     ** Prevent auto-changing theme when app enters background, and re-allow when registered back into the foreground properly.
     **
     ** iOS has a blip whereby entering the background changes the system value of light/dark mode to be the opposite,
     ** related to allowing multiple Appearance screenshots in Multi-task Manager.
     **
     ** Still need to allow for auto theme changes when foregrounded, eg: Sunrise/Sunset system toggles between light/dark
     */
    useEffect(() => {
        const subscription = AppState.addEventListener(
            "change",
            nextAppState => {
                if (
                    appState.current.match(/inactive|background/) != null &&
                    nextAppState === "active"
                ) {
                    setCanAutoChangeTheme(true);
                    const updatedTheme = getTheme(scheme);
                    setActiveTheme(updatedTheme);
                }

                if (nextAppState === "background") {
                    setCanAutoChangeTheme(false);
                }
                appState.current = nextAppState;
            }
        );

        if (canAutoChangeTheme) {
            const updatedTheme = getTheme(scheme);
            setActiveTheme(updatedTheme);
        }

        return () => {
            subscription.remove();
        };

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [scheme]);

    if (client != null) {
        return (
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <ApolloProvider client={client}>
                        <ThemeProvider theme={activeTheme}>
                            <NavigationContainer>
                                <SafeAreaProvider>
                                    <AppContent />
                                </SafeAreaProvider>
                            </NavigationContainer>
                        </ThemeProvider>
                    </ApolloProvider>
                </PersistGate>
            </Provider>
        );
    }

    return <ActivityIndicator />;
}

export default App;
