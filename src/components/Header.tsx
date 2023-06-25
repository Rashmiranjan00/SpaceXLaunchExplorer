import React from "react";
import styled from "styled-components";
import {
    View,
    Text,
    type ViewStyle,
    type StyleProp,
    type TextStyle,
    TouchableWithoutFeedback
} from "react-native";
import { StackActions, useNavigation } from "@react-navigation/native";
import { BackIcon, CloseIcon } from "./icons";
import { s6 } from "../util/Sizes";
import hitSlopAll from "../shared/hitSlopAll";

export interface OverrideDefaultButtons {
    back?: boolean;
    close?: boolean;
}

export interface HeaderStyles {
    wrapper?: StyleProp<ViewStyle>;
    title?: StyleProp<TextStyle>;
}

interface IHeader {
    showBack?: boolean;
    showClose?: boolean;
    title: string;
    onBackButtonPressed?: () => void;
    onClosePress?: () => void;
    overrideDefaultButtons?: OverrideDefaultButtons;
    bigHeader?: boolean;
    customStyles?: HeaderStyles;
}

const Header = ({
    showBack,
    title,
    bigHeader,
    overrideDefaultButtons,
    showClose = true,
    onClosePress,
    onBackButtonPressed,
    customStyles = { title: null, wrapper: null }
}: IHeader): React.ReactElement => {
    const navigation = useNavigation();

    const handleBackButtonPress = (): void => {
        if (overrideDefaultButtons?.back && onBackButtonPressed) {
            onBackButtonPressed();
            return;
        }

        navigation.dispatch(StackActions.pop());
    };

    const handleClosePress = (): void => {
        if (overrideDefaultButtons?.close && onClosePress) {
            onClosePress();
            return;
        }

        navigation.dispatch(StackActions.popToTop());

        if (onClosePress) {
            onClosePress();
        }
    };

    return (
        <HeadingWrapper style={customStyles.wrapper}>
            {showBack && (
                <TouchableWithoutFeedback
                    hitSlop={hitSlopAll(22)}
                    onPress={handleBackButtonPress}>
                    <BackIconWrapper>
                        <BackIcon />
                    </BackIconWrapper>
                </TouchableWithoutFeedback>
            )}
            {showClose && (
                <TouchableWithoutFeedback
                    hitSlop={hitSlopAll(22)}
                    onPress={handleClosePress}>
                    <CloseIconWrapper>
                        <CloseIcon />
                    </CloseIconWrapper>
                </TouchableWithoutFeedback>
            )}

            <HeadingText
                numberOfLines={1}
                style={customStyles.title}
                bigHeader={bigHeader}
                maxFontSizeMultiplier={1}>
                {title}
            </HeadingText>
        </HeadingWrapper>
    );
};

const HeadingWrapper = styled(View)`
    background-color: ${({ theme }): string => theme.core.background_primary};
    position: relative;
    align-items: center;
    justify-content: center;
    height: 48px;
    ${({ style }) => ({ ...style })};
`;

const HeadingText = styled<{ bigHeader: boolean }>(Text)`
    ${({ theme }) => theme.typography.heading_sm};
    color: ${({ theme, bigHeader }): string =>
        bigHeader ? "transparent" : theme.core.content_primary};
    max-width: 70%;
`;

const CloseIconWrapper = styled(View)`
    position: absolute;
    right: ${s6};
`;

const BackIconWrapper = styled(View)`
    position: absolute;
    left: ${s6};
`;

export default Header;
