/* eslint-disable @typescript-eslint/naming-convention */
import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import styled from "styled-components";
import { s2, s4, s5 } from "../../../util/Sizes";
import { ThemedText } from "../../../components";
import { type Launches } from "../../../redux/launches/launchesModels/launchesModel";
import { convertUTCDateToLocalDate } from "../../../shared/dateHelper";

interface LaunchCardProps {
    launches: Launches;
}

const LaunchCard = ({ launches }: LaunchCardProps) => {
    const { launch_success, launch_date_utc, mission_name } = launches;
    const date = convertUTCDateToLocalDate(new Date(launch_date_utc));
    return (
        <TouchableOpacity onPress={() => {}}>
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
