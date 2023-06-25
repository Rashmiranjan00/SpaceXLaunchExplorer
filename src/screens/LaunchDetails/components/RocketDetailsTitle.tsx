/* eslint-disable @typescript-eslint/naming-convention */

import React from "react";
import { View } from "react-native";
import styled from "styled-components";
import { s4 } from "../../../util/Sizes";
import { ThemedView, ThemedText } from "../../../components";
import { type LaunchRocket } from "../../../redux/launches/launchesModels/launchesModel";

const RocketDetailsTitle: React.FC<LaunchRocket> = props => {
    const { rocket, rocket_name, rocket_type } = props;

    return (
        <Wrapper>
            <RocketInfo>
                <PrimaryDetailsText>Rocket: {rocket_name}</PrimaryDetailsText>
                <PrimaryDetailsText>
                    Company: {rocket.company}
                </PrimaryDetailsText>
            </RocketInfo>
            <SecondaryDetailsText type="secondary">
                Type: {rocket_type}
            </SecondaryDetailsText>
        </Wrapper>
    );
};

const Wrapper = styled(ThemedView)`
    flex-direction: row;
    height: 60px;
    justify-content: space-between;
    align-items: center;
    padding: ${s4} 14px;
    border-bottom-width: 0.5px;
    border-bottom-color: ${({ theme }) => theme.core.border_opaque};
`;

const RocketInfo = styled(View)`
    flex-direction: column;
    align-items: flex-start;
    flex: 1;
`;

const PrimaryDetailsText = styled(ThemedText)`
    ${({ theme }) => theme.typography.label_med_md};
    flex: 1;
`;

const SecondaryDetailsText = styled(ThemedText)`
    ${({ theme }) => theme.typography.label_reg_rg};
`;

export default RocketDetailsTitle;
