import { View, Text, Pressable, Dimensions } from "react-native";
import { GestureDetector, Gesture, Directions } from 'react-native-gesture-handler'
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from "react-native-reanimated";

import { styles } from "./styles";

const START = 24;
const LIMIT = Dimensions.get('window').width - 124;

export function Fling() {
    const position = useSharedValue(START);

    const animatedStyle = useAnimatedStyle(() => ({
        transform: [{ translateX: position.value }],
    }));

    const directionRight = Gesture
        .Fling()
        .direction(Directions.RIGHT)
        .onStart((event) => {
            position.value = withTiming(LIMIT, { duration: 500 });
        })

    const directionLeft = Gesture
        .Fling()
        .direction(Directions.LEFT)
        .onStart((event) => {
            position.value = withTiming(START, { duration: 500 });
        })

    return (
        <View style={styles.container}>
            <GestureDetector gesture={Gesture.Exclusive(directionRight, directionLeft)}>
                <Animated.View style={[styles.box, animatedStyle]} />
            </GestureDetector>
            <Text>Fling</Text>
        </View>
    )
}