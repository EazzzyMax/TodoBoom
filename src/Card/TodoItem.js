import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import TodoCheckBox from './TodoCheckBox';
import GlobalStyle from '../utils/GlobalStyle';
import { TodoContextModal } from './TodoContextModal';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTodoComplete } from '../redux/todoSlice';

export default function TodoItem({ todo }) {
  const [contextVisibility, setContextVisibility] = useState(false);

  const dispatch = useDispatch();
  const currentCardId = useSelector((state) => state.cards.currentCardId);
  const toggleState = () => dispatch(toggleTodoComplete({ id: todo.id, cardId: currentCardId }));

  return (
    <View>
      <TodoContextModal isVisible={contextVisibility} todo={todo} closeModal={() => setContextVisibility(false)} />
      <TouchableOpacity onPress={() => setContextVisibility(true)} style={s.content}>
        <TodoCheckBox toggleState={toggleState} completed={todo.completed} />
        <View style={s.textContent}>
          <View style={s.titleWrapper}>
            <Text style={[s.title, !!todo.completed && { color: '#888' }]}>{todo.title}</Text>
          </View>
          {(todo.desc.lenght > 0 && !todo.completed) && <Text style={[s.desc]}>{todo.desc}</Text>}
        </View>
      </TouchableOpacity>
    </View>
  );
}

const s = StyleSheet.create({
  content: {
    flexDirection: 'row',
  },
  textContent: {
    flexShrink: 1,
  },
  titleWrapper: {
    justifyContent: 'center',
    minHeight: 26,
  },
  title: {
    fontSize: 18,
    ...GlobalStyle.Raleway500Font,
    textAlignVertical: 'center',
    color: '#fff',
  },
  desc: {
    fontSize: 16,
    ...GlobalStyle.Raleway400Font,
    marginTop: 5,
    color: '#aaa',
  },
  completed: {
    opacity: 0.4,
  },
});
