/* eslint-disable @typescript-eslint/naming-convention */

import React from "react";
import { useRoute, type RouteProp } from "@react-navigation/native";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { ThemedView } from "../../components";
import SafeAreaWrapper from "../../navigators/ScreenSafeAreaWrapper";
import Header from "../../components/Header";
import { type launchesRoutes } from "../../shared/routes";
import { selectLaunchById } from "../../redux/launches/launchesSelectors";
import { type Launches } from "../../redux/launches/launchesModels/launchesModel";
import RocketDetailsTitle from "./components/RocketDetailsTitle";
import RocketDetailsBody from "./components/RocketDetailsBody";

interface LaunchdetailsRouteParams {
    launchId: string;
}

type LaunchDetailRouteProps = RouteProp<
    { [launchesRoutes.launchDetails]: LaunchdetailsRouteParams },
    typeof launchesRoutes.launchDetails
>;

const LaunchDetails: React.FC = () => {
    const {
        params: { launchId }
    } = useRoute<LaunchDetailRouteProps>();

    // Get the lunch details by using launchId
    const selectedLaunchData = useSelector(selectLaunchById(launchId));

    const { mission_name, rocket } = selectedLaunchData as Launches;

    return (
        <Wrapper>
            <Header title={mission_name} showClose={false} showBack />
            <RocketDetailsTitle {...rocket} />
            <RocketDetailsBody {...rocket} />
        </Wrapper>
    );
};

const Wrapper = styled(ThemedView)`
    flex: 1;
`;

const SafeAreaLaunchDetails = () => (
    <SafeAreaWrapper>
        <LaunchDetails />
    </SafeAreaWrapper>
);

export default SafeAreaLaunchDetails;
