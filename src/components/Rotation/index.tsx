import { View, Text, Pressable } from "react-native";
import { GestureDetector, Gesture } from 'react-native-gesture-handler'
import Animated, { useSharedValue, useAnimatedStyle, withSpring, withTiming, interpolateColor } from "react-native-reanimated";
import { styles } from "./styles";

export function Rotation() {
    const rotation = useSharedValue(0);

    const animatedStyle = useAnimatedStyle(() => ({
        transform: [{ rotateZ: `${(rotation.value / Math.PI) * 180}deg` }],
    }));

    const RotationGesture = Gesture
        .Rotation()
        .onUpdate((event) => {
            rotation.value = event.rotation;
        })

    return (
        <View style={styles.container}>
            <GestureDetector gesture={RotationGesture}>
                <Animated.View style={[styles.box, animatedStyle]} />
            </GestureDetector>
            <Text>Rotation</Text>
        </View>
    )
}