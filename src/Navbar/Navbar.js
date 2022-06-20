import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import AddTodoBtn from './AddTodoBtn';

export default function Navbar() {
  return (
    <View style={s.container}>
      <AddTodoBtn />
    </View>
  );
}

const s = StyleSheet.create({
  container: {
    height: 56,
    backgroundColor: '#222',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
