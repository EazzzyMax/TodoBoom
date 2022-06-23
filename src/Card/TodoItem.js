import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import TodoCheckBox from './TodoCheckBox';
import GlobalStyle from '../utils/GlobalStyle';
import { useState } from 'react';
import TodoItemModal from '../TodoItemModal/TodoItemModal';

export default function TodoItem({ removeTodo, todo }) {
  const [todoModalVisible, setTodoModalVisible] = useState(false);
  
  return (
    <TouchableOpacity onPress={() => removeTodo(todo.id)} style={s.container}>
      <TodoItemModal visible={todoModalVisible} closeModal={() => setTodoModalVisible(false)} />;
      <View style={s.content}>
        <TodoCheckBox />
        <View style={s.textContent}>
          <Text style={[GlobalStyle.Raleway500Font, s.title]}>{todo.title}</Text>
          <Text style={[GlobalStyle.Raleway400Font, s.desc]}>{todo.description}</Text>
        </View>
      </View>
      <View style={s.line} />
    </TouchableOpacity>
  );
}

const s = StyleSheet.create({
  container: {},
  content: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  textContent: {
    // backgroundColor: 'rgba(255,0,0,0.1)',
    flexShrink: 1,
  },
  title: {
    fontSize: 18,
    lineHeight: 24,
    color: '#fff',
    flexShrink: 1,
    marginBottom: 5,
  },
  desc: {
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
