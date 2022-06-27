import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { PlusIcon } from './PlusIcon';
import { useDispatch } from 'react-redux';
import { toggleCreateModal } from '../redux/modalSlice';

export default function AddTodoBtn() {
  const dispatch = useDispatch();

  return (
    <TouchableOpacity onPress={() => dispatch(toggleCreateModal(true))}>
      <View style={s.button}>
        <PlusIcon />
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
