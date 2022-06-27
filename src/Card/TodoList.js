import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';
import TodoItem from './TodoItem';
import { useSelector, useDispatch } from 'react-redux';

export default function TodoList() {
  const todos = useSelector((state) => state.todos.todos);

  const renderItem = ({ item }) => <TodoItem todo={item} />;

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
