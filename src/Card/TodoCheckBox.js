import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Animated, { Easing, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

export default function TodoCheckBox({ toggleState, completed }) {
  const dotScale = useSharedValue(+completed);
  const circleScale = useSharedValue(1);
  const circleColor = useSharedValue(completed ? '#50caff' : '#888');

  const animateCheckboxOnPressIn = () => {
    circleScale.value = withTiming(0.9, { duration: 100, easing: Easing.out(Easing.exp) });
  };

  const animateCheckboxOnPressOut = () => {
    dotScale.value = withTiming(Math.abs(dotScale.value - 1), { duration: 100, easing: Easing.out(Easing.exp) });
    circleScale.value = withTiming(1, { duration: 100, easing: Easing.out(Easing.exp) });
    dotScale.value === 0 ? (circleColor.value = '#50caff') : (circleColor.value = '#888');
  };

  const AnimatedStyleDot = useAnimatedStyle(() => {
    return {
      transform: [{ scale: dotScale.value }],
    };
  });
  const AnimateStyleCicrle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: circleScale.value }],
      borderColor: circleColor.value,
    };
  });

  const onPressIn = () => {
    animateCheckboxOnPressIn();
  };
  const onPressOut = () => {
    toggleState();
    animateCheckboxOnPressOut();
  };

  return (
    <TouchableOpacity activeOpacity={1} onPressIn={onPressIn} onPressOut={onPressOut}>
      <Animated.View style={[AnimateStyleCicrle, s.checkbox]}>
        <Animated.View style={[AnimatedStyleDot, s.circle]} />
      </Animated.View>
    </TouchableOpacity>
  );
}

const s = StyleSheet.create({
  checkbox: {
    marginRight: 14,
    width: 25,
    height: 25,
    borderRadius: 12.5,
    borderWidth: 2,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  circle: {
    width: 17,
    height: 17,
    backgroundColor: '#50caff',
    borderRadius: 11.5,
  },
});
