import { useState } from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import CreateTodoModal from '../../Features/CreateTodoModal/CreateTodoModal';
import AddTodoBtn from './AddTodoBtn';

export default function Navbar({ debugString }) {
  const [createVisibility, setCreateVisibility] = useState(false);
  const currentCard = useSelector((state) => state.cards.currentCardId);
  const width = Dimensions.get('window').width;
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
    // height: 70,
    backgroundColor: '#222',
    // flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
