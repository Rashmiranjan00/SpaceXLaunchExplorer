import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { ThemedText, ThemedView } from '../components';
import { getLaunchPads } from '../redux/launchPads/launchPadsActions';

function WelcomeScreen() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getLaunchPads({ limit: 10, offset: 0 }));
    }, []);

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
