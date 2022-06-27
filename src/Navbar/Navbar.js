import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import AddTodoBtn from './AddTodoBtn';

export default function Navbar({ }) {
  return (
    <View style={s.nav}>
      <AddTodoBtn  />
    </View>
  );
}

const s = StyleSheet.create({
  nav: {
    height: 56,
    backgroundColor: '#222',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
