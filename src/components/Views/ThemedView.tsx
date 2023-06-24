import styled from "styled-components";
import { View } from "react-native";

const ThemedView = styled(View)`
    background-color: ${({ theme }): string => theme.core.background_primary};
`;

export default ThemedView;
