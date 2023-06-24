import React from "react";
import styled from "styled-components";
import { ThemedText, ThemedView } from "../../components";

import SafeAreaWrapper from "../../navigators/ScreenSafeAreaWrapper";

const MapScreen = () => (
    <Wrapper>
        <Title>MAP SCREEN</Title>
    </Wrapper>
);

const Wrapper = styled(ThemedView)`
    height: 100%;
`;

const Title = styled(ThemedText)`
    ${({ theme }) => theme.typography.heading_special_lg};
`;

const SafeAreaMapScreen = () => (
    <SafeAreaWrapper>
        <MapScreen />
    </SafeAreaWrapper>
);

export default SafeAreaMapScreen;
