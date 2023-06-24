/* eslint-disable */
import React from 'react';
import { Text, StyleProp, TextStyle } from 'react-native';
import styled from 'styled-components';

type ThemeType = 'primary' | 'secondary';
interface IThemedText {
    type?: ThemeType;
    style?: StyleProp<TextStyle>;
    children?: React.ReactElement | React.ReactNode;
}

const ThemedText: React.FC<IThemedText> = ({
    children,
    type = 'primary',
    style,
    ...props
}) => (
    <StyledText style={style} type={type} {...props}>
        {children}
    </StyledText>
);

const StyledText = styled<{ type: ThemeType }>(Text)`
    ${({ theme }) => theme.typography.label_med_md};

    color: ${({ theme, type }): string =>
        type === 'primary'
            ? theme.core.content_primary
            : theme.core.content_secondary};
`;

export default ThemedText;
