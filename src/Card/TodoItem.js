import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import TodoCheckBox from './TodoCheckBox';
import GlobalStyle from '../utils/GlobalStyle';

import { useDispatch } from 'react-redux';
import { dispatchCurrentTodo } from '../redux/todoSlice';
import { toggleContextModal } from '../redux/modalSlice';

export default function TodoItem({ todo }) {
  const dispatch = useDispatch();
  const setCurrentTodo = () => dispatch(dispatchCurrentTodo({ todo }));
  const openTodoModal = () => dispatch(toggleContextModal(true));

  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          setCurrentTodo();
          openTodoModal();
        }}
        style={s.content}
      >
        <TodoCheckBox />
        <View style={s.textContent}>
          <Text style={[GlobalStyle.Raleway500Font, s.title]}>{todo.title}</Text>
          {!!todo.desc && <Text style={[GlobalStyle.Raleway400Font, s.desc]}>{todo.desc}</Text>}
        </View>
      </TouchableOpacity>
      <View style={s.line} />
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
  title: {
    fontSize: 18,
    lineHeight: 24,
    color: '#fff',
    flexShrink: 1,
  },
  desc: {
    marginTop: 5,
    color: '#aaa',
    fontSize: 16,
    textAlignVertical: 'center',
  },
  line: {
    marginVertical: 10,
    width: '100%',
    height: 1,
    backgroundColor: '#383838',
  },
});
