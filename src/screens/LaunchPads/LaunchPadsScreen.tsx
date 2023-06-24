import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";

import { ThemedText, ThemedView } from "../../components";
import { getLaunchPads } from "../../redux/launchPads/launchPadsActions";

import SafeAreaWrapper from "../../navigators/ScreenSafeAreaWrapper";

const LaunchPadsScreen = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getLaunchPads({ limit: 10, offset: 0 }));
    }, [dispatch]);

    return (
        <Wrapper>
            <Title>LaunchPads Screen</Title>
        </Wrapper>
    );
};

const Wrapper = styled(ThemedView)`
    height: 100%;
`;

const Title = styled(ThemedText)`
    ${({ theme }) => theme.typography.heading_special_lg};
`;

const SafeAreaLaunchPadsScreen = () => (
    <SafeAreaWrapper>
        <LaunchPadsScreen />
    </SafeAreaWrapper>
);

export default SafeAreaLaunchPadsScreen;
