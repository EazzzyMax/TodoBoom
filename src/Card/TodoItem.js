import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import TodoCheckBox from './TodoCheckBox';
import GlobalStyle from '../utils/GlobalStyle';
import { useState } from 'react';
import TodoItemModal from '../TodoItemModal/TodoItemModal';

export default function TodoItem({ openTodoModal, todo }) {
  return (
    <TouchableOpacity onPress={() => openTodoModal(todo.id)} style={s.container}>
      <View style={s.content}>
        <TodoCheckBox />
        <View style={s.textContent}>
          <Text style={[GlobalStyle.Raleway500Font, s.title]}>{todo.title}</Text>
          {!!todo.description && <Text style={[GlobalStyle.Raleway400Font, s.desc]}>{todo.description}</Text>}
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
  },
  textContent: {
    // backgroundColor: 'rgba(255,0,0,0.1)',
    flexShrink: 1,
  },
  title: {
    // backgroundColor: 'rgba(0,255,0,0.1)',
    fontSize: 18,
    lineHeight: 24,
    color: '#fff',
    flexShrink: 1,
  },
  desc: {
    marginTop: 5,
    // backgroundColor: 'rgba(0,0,255,0.1)',
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
