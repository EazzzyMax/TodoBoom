import { FlatList, StyleSheet, View } from 'react-native';
import TodoItem from './TodoItem';
import { useSelector } from 'react-redux';

export default function TodoList() {
  const todos = useSelector((state) => state.todos.todos);
  const renderItem = ({ item }) => <TodoItem todo={item} />;

  return (
    <View style={s.container}>
      <FlatList
        contentContainerStyle={s.ccStyle}
        data={todos}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const s = StyleSheet.create({
  ccStyle: {
    padding: 20,
  },
  container: {
    flex: 1,
  },
});
