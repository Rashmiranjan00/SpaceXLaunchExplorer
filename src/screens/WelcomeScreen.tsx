import React from "react";
import styled from "styled-components";
import { ThemedText, ThemedView } from "../components";

function WelcomeScreen() {
    return (
        <Container>
            <Title>Hello World</Title>
        </Container>
    );
}

const Container = styled(ThemedView)`
    flex: 1;
    align-items: center;
    justify-content: center;
`;

const Title = styled(ThemedText)`
    ${({ theme }) => theme.typography.heading_special_lg};
`;

export default WelcomeScreen;
