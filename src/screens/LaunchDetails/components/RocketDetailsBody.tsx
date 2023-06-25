import React from "react";
import { View } from "react-native";
import styled from "styled-components";
import { s4 } from "../../../util/Sizes";
import { ThemedView, ThemedText } from "../../../components";
import { type LaunchRocket } from "../../../redux/launches/launchesModels/launchesModel";

const RocketDetailsBody: React.FC<LaunchRocket> = props => {
    const { rocket } = props;

    return (
        <Wrapper>
            <Heading>
                <PrimaryDetailsText>Engine</PrimaryDetailsText>
            </Heading>
            <PrimaryDetailsText>Type: {rocket.engines.type}</PrimaryDetailsText>
            <PrimaryDetailsText>
                Propellant 1: {rocket.engines.propellant_1}
            </PrimaryDetailsText>
            <PrimaryDetailsText>
                Propellant 2: {rocket.engines.propellant_2}
            </PrimaryDetailsText>
            <SecondaryDetailsText type="secondary">
                Version: {rocket.engines.version}
            </SecondaryDetailsText>
        </Wrapper>
    );
};

const Wrapper = styled(ThemedView)`
    flex-direction: column;
    padding: ${s4} 14px;
    flex: 1;
`;

const Heading = styled(View)`
    align-items: center;
`;

const PrimaryDetailsText = styled(ThemedText)`
    ${({ theme }) => theme.typography.label_med_md};
`;

const SecondaryDetailsText = styled(ThemedText)`
    ${({ theme }) => theme.typography.label_reg_rg};
`;

export default RocketDetailsBody;
