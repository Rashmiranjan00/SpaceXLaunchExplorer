import React from "react";
import { Animated, type StyleProp, View, type ViewStyle } from "react-native";
import styled from "styled-components";
import * as Progress from "react-native-progress";
import { Colors } from "../../util/Theme";

const Spinner = ({
    color = Colors.yellow_50,
    size = 40,
    thickness = 4,
    style = null
}: {
    color?: string;
    size?: number;
    thickness?: number;
    style?: Animated.AnimatedProps<StyleProp<ViewStyle>> | null;
}): React.ReactElement => {
    return (
        <AnimatedSpinner style={style}>
            <Progress.CircleSnail
                direction="clockwise"
                thickness={thickness}
                size={size}
                color={color}
            />
        </AnimatedSpinner>
    );
};

const StyledView = styled(View)`
    justify-content: center;
    flex-direction: row;
`;

const AnimatedSpinner = Animated.createAnimatedComponent(StyledView);

export default Spinner;
