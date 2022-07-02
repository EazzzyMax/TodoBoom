import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function TodoCheckBox({ onPress }) {

  return (
    <TouchableOpacity onPress={onPress}>
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
