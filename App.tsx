import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Touches } from './src/components/Touches';
import { LongPress } from './src/components/LongPress';
import { Rotation } from './src/components/Rotation';
import { Pinch } from './src/components/Pinch';
import { Pan } from './src/components/Pan';
import { PanXY } from './src/components/PanXY';
import { Fling } from './src/components/Fling';

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Fling />
    </GestureHandlerRootView>
  );
}

