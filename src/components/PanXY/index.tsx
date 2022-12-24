import { View, Text, Pressable } from "react-native";
import { GestureDetector, Gesture } from 'react-native-gesture-handler'
import Animated, { useSharedValue, useAnimatedStyle, withSpring, withTiming, interpolateColor } from "react-native-reanimated";
import { styles } from "./styles";

export function PanXY() {
    const positionX = useSharedValue(0);
    const positionY = useSharedValue(0);

    const animatedStyle = useAnimatedStyle(() => ({
        transform: [{ translateX: positionX.value }, { translateY: positionY.value }],
    }));

    const RotationGesture = Gesture
        .Pan()
        .onUpdate((event) => {
            positionX.value = event.translationX;
            positionY.value = event.translationY;

            // Para retornar a posição inicial
            // if (event.translationX > 100) {
            //     positionX.value = withTiming(0);
            // }

            // Verificação para direção
            if (event.translationX > 0) {
                console.log('Direita');
            } else if (event.translationX < 0) {
                console.log('Esquerda');
            }
        })

    return (
        <View style={styles.container}>
            <GestureDetector gesture={RotationGesture}>
                <Animated.View style={[styles.box, animatedStyle]} />
            </GestureDetector>
            <Text>Pan XY</Text>
        </View>
    )
}