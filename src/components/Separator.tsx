import { View } from "react-native";
import styled from "styled-components";

const Separator = styled(View)`
    height: 12px;
    width: 100%;
    background-color: ${({ theme }) => theme.core.background_tertiary};
`;

export default Separator;
