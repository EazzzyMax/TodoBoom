import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CreateTodoModal from '../CreateTodoModal/CreateTodoModal';
import AddTodoBtn from './AddTodoBtn';

export default function Navbar({}) {
  const [createVisibility, setCreateVisibility] = useState(false);
  return (
    <View style={s.nav}>
      <CreateTodoModal isVisible={createVisibility} closeModal={() => setCreateVisibility(false)} />
      <AddTodoBtn openModal={() => setCreateVisibility(true)} />
    </View>
  );
}

const s = StyleSheet.create({
  nav: {
    height: 56,
    backgroundColor: '#222',
    // flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
