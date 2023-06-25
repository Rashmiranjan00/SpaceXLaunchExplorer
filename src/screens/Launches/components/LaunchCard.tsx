/* eslint-disable @typescript-eslint/naming-convention */
import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import styled from "styled-components";
import { CommonActions, useNavigation } from "@react-navigation/native";

import { s2, s4, s5 } from "../../../util/Sizes";
import { ThemedText } from "../../../components";
import { type Launches } from "../../../redux/launches/launchesModels/launchesModel";
import { convertUTCDateToLocalDate } from "../../../shared/dateHelper";
import { launchesRoutes } from "../../../shared/routes";

interface LaunchCardProps {
    launches: Launches;
}

const LaunchCard = ({ launches }: LaunchCardProps) => {
    const navigation = useNavigation();

    const { launch_success, launch_date_utc, mission_name, id } = launches;
    const date = convertUTCDateToLocalDate(new Date(launch_date_utc));

    const navigateToLaunchDetails = () => {
        navigation.dispatch(
            CommonActions.navigate({
                name: launchesRoutes.launchDetails,
                params: { launchId: id }
            })
        );
    };

    return (
        <TouchableOpacity onPress={navigateToLaunchDetails}>
            <Container>
                <ContentWrapper>
                    <DetailsPrimaryText>
                        Mission: {mission_name}
                    </DetailsPrimaryText>
                    <DetailsSecondaryText> {date} </DetailsSecondaryText>
                </ContentWrapper>
                <Content>status: {launch_success}</Content>
            </Container>
        </TouchableOpacity>
    );
};

const Container = styled(View)`
    flex-direction: column;
    padding: ${s4} ${s5};
`;

const ContentWrapper = styled(View)`
    flex: 1;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`;

const DetailsPrimaryText = styled(ThemedText)`
    ${({ theme }) => theme.typography.label_med_md};
`;

const DetailsSecondaryText = styled(ThemedText)`
    ${({ theme }) => theme.typography.label_reg_md};
`;

const Content = styled(Text)`
    ${({ theme }) => theme.typography.label_reg_rg};
    color: ${({ theme }) => theme.core.content_secondary};
    margin-top: ${s2};
`;

export default LaunchCard;
