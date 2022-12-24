import { View, Text, Pressable } from "react-native";
import { GestureDetector, Gesture } from 'react-native-gesture-handler'
import Animated, { useSharedValue, useAnimatedStyle, withSpring, withTiming, interpolateColor } from "react-native-reanimated";
import { styles } from "./styles";

export function LongPress() {
    const size = useSharedValue(100);

    const animatedStyle = useAnimatedStyle(() => ({
        width: size.value,
        height: size.value,
    }));

    const longPressGesture = Gesture
        .LongPress()
        .onTouchesDown(() => {
            size.value = withTiming(size.value + 200, { duration: 500 });
        })
        .onEnd((e, success) => {
            if (success) {
                console.log(`Segurou o botão durante ${e.duration}ms.`)
                size.value = withTiming(100, { duration: 500 });
            }
        })
    return (
        <View style={styles.container}>
            <GestureDetector gesture={longPressGesture}>
                <Animated.View style={[styles.box, animatedStyle]} />
            </GestureDetector>
            <Text>LongPress</Text>
        </View>
    )
}