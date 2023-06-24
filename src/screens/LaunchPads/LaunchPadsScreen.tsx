import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { ThemedText, ThemedView } from "../../components";

import SafeAreaWrapper from "../../navigators/ScreenSafeAreaWrapper";
import { useLaunchPads } from "../../hooks/useLaunchPads";
import { getLaunchPads } from "../../redux/launchPads/launchPadsActions";

const LaunchPadsScreen = () => {
    const dispatch = useDispatch();
    const { launchPads } = useLaunchPads();
    useEffect(() => {
        if (launchPads)
            dispatch(
                getLaunchPads({
                    launchPads
                })
            );
    }, [launchPads, dispatch]);

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
