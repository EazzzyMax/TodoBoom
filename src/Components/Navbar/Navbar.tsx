import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import CreateTodoModal from '../../Features/CreateTodoModal/CreateTodoModal';
import AddTodoBtn from './AddTodoBtn';

export default function Navbar({}) {
  const [createModalVisibility, setCreateModalVisibility] = useState(false);
  return (
    <View style={s.nav}>
      <CreateTodoModal isVisible={createModalVisibility} closeModal={() => setCreateModalVisibility(false)} />
      <AddTodoBtn openModal={() => setCreateModalVisibility(true)} />
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
