/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState, useEffect } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    useColorScheme,
    View,
    ActivityIndicator,
} from 'react-native';

import {
    Colors,
    Header,
    LearnMoreLinks,
} from 'react-native/Libraries/NewAppScreen';

import { ApolloProvider, type ApolloClient } from '@apollo/client';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { getApolloClient } from './src/util/ApolloClient';
import store, { persistor } from './src/redux/store';

function App(): JSX.Element {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [client, setClient] = useState<ApolloClient<any>>();
    const isDarkMode = useColorScheme() === 'dark';

    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };

    useEffect(() => {
        getApolloClient()
            .then(setClient)
            .catch(e => {
                // eslint-disable-next-line no-console
                console.log(e);
            });
    }, []);

    if (client != null) {
        return (
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <ApolloProvider client={client}>
                        <SafeAreaView style={backgroundStyle}>
                            <StatusBar
                                barStyle={
                                    isDarkMode
                                        ? 'light-content'
                                        : 'dark-content'
                                }
                                backgroundColor={
                                    backgroundStyle.backgroundColor
                                }
                            />
                            <ScrollView
                                contentInsetAdjustmentBehavior="automatic"
                                style={backgroundStyle}>
                                <Header />
                                <View
                                    style={{
                                        backgroundColor: isDarkMode
                                            ? Colors.black
                                            : Colors.white,
                                    }}>
                                    <LearnMoreLinks />
                                </View>
                            </ScrollView>
                        </SafeAreaView>
                    </ApolloProvider>
                </PersistGate>
            </Provider>
        );
    }

    return <ActivityIndicator />;
}

export default App;
