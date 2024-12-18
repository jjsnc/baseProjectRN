import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring
} from 'react-native-reanimated';
import {View, Button} from 'react-native';
import React from 'react';

export default function AnimatedStyleUpdateExample(): React.ReactElement {
  const randomWidth = useSharedValue(10);

  const style = useAnimatedStyle(() => {
    console.log('==Animated==');
    return {
      width: withSpring(randomWidth.value),

    };
  });

  console.log('==render==');

  return (
    <View>
      <Animated.View
        style={[
          {width: 100, height: 30, backgroundColor: 'cornflowerblue'},
          style,
        ]}
      />
      <Button
        title="切换宽度"
        onPress={() => {
          randomWidth.value = Math.random() * 350;
        }}
      />
    </View>
  );
}
