import { View, Text, Pressable } from "react-native";
import { GestureDetector, Gesture } from 'react-native-gesture-handler'
import Animated, { useSharedValue, useAnimatedStyle, withSpring, withTiming, interpolateColor } from "react-native-reanimated";
import { styles } from "./styles";

export function Pan() {
    const position = useSharedValue(0);

    const animatedStyle = useAnimatedStyle(() => ({
        transform: [{ translateX: position.value }],
    }));

    const RotationGesture = Gesture
        .Pan()
        .minPointers(2)
        .onUpdate((event) => {
            position.value = event.translationX;
        })

    return (
        <View style={styles.container}>
            <GestureDetector gesture={RotationGesture}>
                <Animated.View style={[styles.box, animatedStyle]} />
            </GestureDetector>
            <Text>Pan</Text>
        </View>
    )
}