import { View, Text, Pressable } from "react-native";
import { GestureDetector, Gesture } from 'react-native-gesture-handler'
import Animated, { useSharedValue, useAnimatedStyle, withSpring, withTiming, interpolateColor } from "react-native-reanimated";
import { styles } from "./styles";

export function Touches() {
    const position = useSharedValue(100);

    const doubleTapActive = useSharedValue(0);

    const animatedStyle = useAnimatedStyle(() => ({
        width: position.value,
        height: position.value,
        backgroundColor: interpolateColor(doubleTapActive.value, [0, 1], ['#8527e5', 'pink'])
    }));

    function onPressIn() {
        position.value = withSpring(150);
    }
    function onPressOut() {
        position.value = withSpring(100);
    }


    const onGesture = Gesture
        .Tap()
        .numberOfTaps(2)
        .onStart(() => {
            console.log('Double tap');
            doubleTapActive.value = withTiming((doubleTapActive.value ? 0 : 1), { duration: 500 });
        })
    return (
        <View style={styles.container}>
            <GestureDetector gesture={onGesture}>
                <Pressable onPressIn={onPressIn} onPressOut={onPressOut}>
                    <Animated.View style={[styles.box, animatedStyle]} />
                </Pressable>
            </GestureDetector>
            <Text>Touches</Text>
        </View>
    )
}