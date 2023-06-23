import React from "react";
import styled from "styled-components";
import { type Edge, SafeAreaView } from "react-native-safe-area-context";
import ThemedView from "./ThemedView";

interface ISafeAreaThemedView {
    customStyles?: object;
    safeAreaEdgesOverride?: Edge[];
    children?: React.ReactNode;
}

const SafeAreaThemedView: React.FC<ISafeAreaThemedView> = ({
    customStyles,
    safeAreaEdgesOverride = ["bottom", "left", "right", "top"],
    children
}): React.ReactElement => (
    <StyledView>
        <SafeAreaView edges={safeAreaEdgesOverride} style={customStyles}>
            {children}
        </SafeAreaView>
    </StyledView>
);

const StyledView = styled(ThemedView)`
    flex: 1;
`;

export default SafeAreaThemedView;
