import React from "react";

// Packages
import { GestureHandlerRootView } from "react-native-gesture-handler";
import styled from "styled-components";

// Utils;
import ThemedView from "./src/components/Views/ThemedView";
import routes from "./src/shared/routes";

import AppNavigator from "./src/navigators/AppNavigator";

const AppContent: React.FC = () => {
    return (
        <StyledGestureHandlerRootView>
            <AppWrapper>
                <AppNavigator initialRouteName={routes.welcome} />
            </AppWrapper>
        </StyledGestureHandlerRootView>
    );
};

export default AppContent;

const AppWrapper = styled(ThemedView)`
    flex: 1;
`;

const StyledGestureHandlerRootView = styled(GestureHandlerRootView)`
    flex: 1;
`;
