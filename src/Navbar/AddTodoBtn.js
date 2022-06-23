import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { PlusIcon } from './PlusIcon';

export default function AddTodoBtn({onPress}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={s.button}>
        <PlusIcon/>
      </View>
    </TouchableOpacity>
  );
}

const s = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#50CAFF',
    width: 80,
    height: 46,
    borderRadius: 15,
  },
});
