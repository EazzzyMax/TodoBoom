import { FC } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Animated, { Easing, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { colors } from '../../../../../StylesConstants/Colors';

interface checkboxProps {
  toggleState: () => void;
  completed: boolean;
}

const TodoCheckBox: FC<checkboxProps> = ({ toggleState, completed }) => {
  //reanimated
  const dotScale = useSharedValue(+completed);
  const circleScale = useSharedValue(1);
  const circleColor = useSharedValue(completed ? colors.checkBox0 : '#888');

  const animateCheckboxOnPressIn = () => {
    circleScale.value = withTiming(0.9, { duration: 100, easing: Easing.out(Easing.exp) });
  };

  const animateCheckboxOnPressOut = () => {
    dotScale.value = withTiming(Math.abs(dotScale.value - 1), { duration: 250, easing: Easing.out(Easing.exp) });
    circleScale.value = withTiming(1, { duration: 150, easing: Easing.out(Easing.exp) });
    dotScale.value === 0 ? (circleColor.value = colors.checkBox0) : (circleColor.value = '#888');
  };

  const AnimatedStyleDot = useAnimatedStyle(() => {
    return { transform: [{ scale: dotScale.value }] };
  });
  const AnimateStyleCicrle = useAnimatedStyle(() => {
    return { transform: [{ scale: circleScale.value }], borderColor: circleColor.value };
  });

  const onPressOut = () => {
    toggleState();
    animateCheckboxOnPressOut();
  };

  return (
    <TouchableOpacity activeOpacity={1} onPressIn={animateCheckboxOnPressIn} onPressOut={onPressOut}>
      <Animated.View style={[AnimateStyleCicrle, s.checkbox]}>
        <Animated.View style={[AnimatedStyleDot, s.circle]} />
      </Animated.View>
    </TouchableOpacity>
  );
};

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
    backgroundColor: colors.checkBox0,
    borderRadius: 11.5,
  },
});

export default TodoCheckBox;
