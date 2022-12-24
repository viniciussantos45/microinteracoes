import { View, Text, Pressable } from "react-native";
import { GestureDetector, Gesture } from 'react-native-gesture-handler'
import Animated, { useSharedValue, useAnimatedStyle, withSpring, withTiming, interpolateColor } from "react-native-reanimated";
import { styles } from "./styles";

export function Pinch() {
    const scale = useSharedValue(1);

    const animatedStyle = useAnimatedStyle(() => ({
        transform: [{ scale: scale.value }],
    }));

    const RotationGesture = Gesture
        .Pinch()
        .onUpdate((event) => {
            scale.value = event.scale;
        })

    return (
        <View style={styles.container}>
            <GestureDetector gesture={RotationGesture}>
                <Animated.View style={[styles.box, animatedStyle]} />
            </GestureDetector>
            <Text>Pinch</Text>
        </View>
    )
}