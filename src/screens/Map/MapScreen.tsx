/* eslint-disable */
import React, { useEffect } from 'react';
import styled from 'styled-components';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { PermissionsAndroid, Platform } from 'react-native';

import { ThemedView } from '../../components';
import Header from '../../components/Header';
import SafeAreaWrapper from '../../navigators/ScreenSafeAreaWrapper';

const MapScreen = () => {
    useEffect(() => {
        if (Platform.OS === 'android') requestLocationPermission();
    }, []);

    const requestLocationPermission = async () => {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
                {
                    title: 'location permission',
                    message: 'location for map',
                    buttonPositive: 'OK',
                    buttonNegative: 'Cancel',
                },
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                console.log('You can use the location');
            } else {
                console.log('Location permission denied');
            }
        } catch (err) {
            console.log('err', err);
        }
    };
    return (
        <Wrapper>
            <Header title="LaunchPads" showClose={false} />
            <StyledMapView
                provider={PROVIDER_GOOGLE}
                style={{ flex: 1 }}
                initialRegion={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            />
        </Wrapper>
    );
};

const Wrapper = styled(ThemedView)`
    height: 100%;
`;

const StyledMapView = styled(MapView)`
    flex: 1;
`;

const SafeAreaMapScreen = () => (
    <SafeAreaWrapper>
        <MapScreen />
    </SafeAreaWrapper>
);

export default SafeAreaMapScreen;
