import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { ThemedView } from "../../components";
import SafeAreaWrapper from "../../navigators/ScreenSafeAreaWrapper";
import { useLaunches } from "../../hooks/useLaunches";
import { getLaunches } from "../../redux/launches/launchesActions";
import Header from "../../components/Header";
import LaunchesList from "./components/LaunchesList";

const Launches = () => {
    const dispatch = useDispatch();
    const { launches, loading } = useLaunches();
    const launchesData = launches?.launches;
    useEffect(() => {
        if (launches)
            dispatch(
                getLaunches({
                    launches: launchesData,
                    loading
                })
            );
    }, [launches, dispatch, launchesData, loading]);

    return (
        <Wrapper>
            <Header title="Launches" showClose={false} />
            <LaunchesList launchesLoading={loading} />
        </Wrapper>
    );
};

const Wrapper = styled(ThemedView)`
    height: 100%;
`;

const SafeAreaLaunches = () => (
    <SafeAreaWrapper>
        <Launches />
    </SafeAreaWrapper>
);

export default SafeAreaLaunches;
