import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { toggleTodoComplete } from '../redux/todoSlice';

export default function TodoCheckBox() {
  const dispatch = useDispatch();
  // const toggleState = dispatch(toggleTodoComplete)

  return (
    <TouchableOpacity>
      <View style={s.checkbox} />
    </TouchableOpacity>
  );
}

const s = StyleSheet.create({
  checkbox: {
    marginRight: 14,
    width: 25,
    height: 25,
    borderRadius: 12.5,
    borderColor: '#888',
    borderWidth: 2,
  },
});
