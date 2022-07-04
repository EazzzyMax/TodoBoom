import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';

export default function TextPage() {
  const SIZE = 100;
  const scale = useSharedValue(1);

  const thereAndBack = () => {
    scale.value = withRepeat(withTiming(1.7, { duration: 500, easing: Easing.inOut(Easing.exp) }), 2, true);
  };

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
      borderRadius: SIZE / scale.value / 2,
    };
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.item, animatedStyle]} />
      <View style={styles.btnContainer}>
        <TouchableOpacity onPress={thereAndBack} style={styles.button}>
          <Text style={styles.text}>Туда обратно</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnContainer: {
    marginTop: 150,
  },
  button: {
    marginTop: 20,
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#333',
    borderRadius: 15,
  },
  text: {
    color: 'white',
  },
  item: {
    width: 100,
    height: 100,
    backgroundColor: '#50caff',
  },
});
