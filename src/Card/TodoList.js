import { useState } from 'react';
import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';
import TodoItem from './TodoItem';

export default function TodoList({ todos, setTodos, openTodoModal}) {
  const renderItem = ({ item }) => (
    <TodoItem openTodoModal={openTodoModal} todo={item} />
  );

  return (
    <View style={s.container}>
      <FlatList
        style={s.scrollView}
        contentContainerStyle={s.ccStyle}
        data={todos}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const s = StyleSheet.create({
  scrollView: {
    flex: 1,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    borderColor: '#50caff',
  },
  ccStyle: {
    padding: 20,
  },
  container: {
    flex: 1,
  },
});
