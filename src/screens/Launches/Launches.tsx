import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { ThemedText, ThemedView } from "../../components";

import SafeAreaWrapper from "../../navigators/ScreenSafeAreaWrapper";
import { useLaunches } from "../../hooks/useLaunches";
import { getLaunches } from "../../redux/launches/launchesActions";

const Launches = () => {
    const dispatch = useDispatch();
    const { launches } = useLaunches();
    useEffect(() => {
        if (launches)
            dispatch(
                getLaunches({
                    launches
                })
            );
    }, [launches, dispatch]);

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

const SafeAreaLaunches = () => (
    <SafeAreaWrapper>
        <Launches />
    </SafeAreaWrapper>
);

export default SafeAreaLaunches;
