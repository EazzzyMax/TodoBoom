import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import TodoCheckBox from './TodoCheckBox';
import GlobalStyle from '../utils/GlobalStyle';
import { TodoContextModal } from './TodoContextModal';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleTodoComplete } from '../redux/todoSlice';

export default function TodoItem({ todo }) {
  const [contextVisibility, setContextVisibility] = useState(false);

  const dispatch = useDispatch();
  const toggleState = () => dispatch(toggleTodoComplete({ id: todo.id }));

  return (
    <View>
      <TodoContextModal isVisible={contextVisibility} todo={todo} closeModal={() => setContextVisibility(false)} />
      <TouchableOpacity onPress={() => setContextVisibility(true)} style={s.content}>
        <TodoCheckBox
        onPress={toggleState}
        />
        <View style={s.textContent}>
          <View style={s.titleWrapper}>
            <Text style={[GlobalStyle.Raleway500Font, s.title, !!todo.completed && { color: '#888' }]}>
              {todo.title}
            </Text>
          </View>
          {!!(todo.desc && !todo.completed) && <Text style={[GlobalStyle.Raleway400Font, s.desc]}>{todo.desc}</Text>}
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
  titleWrapper: {
    justifyContent: 'center',
    minHeight: 26,
  },
  title: {
    fontSize: 18,
    // backgroundColor: 'red',
    textAlignVertical: 'center',
    color: '#fff',
  },
  desc: {
    marginTop: 5,
    color: '#aaa',
    fontSize: 16,
  },
  line: {
    marginVertical: 10,
    width: '100%',
    height: 1,
    backgroundColor: '#383838',
  },
  completed: {
    opacity: 0.4,
  },
});
