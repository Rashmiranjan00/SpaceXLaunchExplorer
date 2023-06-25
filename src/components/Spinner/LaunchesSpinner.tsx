import React from "react";
import { View } from "react-native";
import styled, { useTheme } from "styled-components";
import Spinner from "./Spinner";

const LaunchesSpinner = (): React.ReactElement => {
    const { core } = useTheme();
    return (
        <SpinnerWrapper>
            <Spinner color={core.content_primary} />
        </SpinnerWrapper>
    );
};

const SpinnerWrapper = styled(View)`
    padding: 32px;
    margin: 12px;
`;

export default LaunchesSpinner;
