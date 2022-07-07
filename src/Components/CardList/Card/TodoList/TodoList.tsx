import { FlatList, StyleSheet, View } from 'react-native';
import TodoItem from './TodoItem/TodoItem';
import { EmptyTodoList } from './EmptyTodoList/EmptyTodoList';
import { ITodo } from '../../../../types/types';
import { FC } from 'react';

interface todoListProps {
  todos: ITodo[];
}

const TodoList: FC<todoListProps> = ({ todos }) => {
  const renderItem = ({ item }) => <TodoItem todo={item} />;
  const LineSeparator = () => (
    <View style={{ marginVertical: 10, width: '100%', height: 1, backgroundColor: '#383838' }} />
  );

  return (
    <View style={s.container}>
      <FlatList
        contentContainerStyle={s.ccStyle}
        data={todos}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={LineSeparator}
        ListEmptyComponent={<EmptyTodoList />}
      />
    </View>
  );
};

const s = StyleSheet.create({
  ccStyle: {
    padding: 15,
    flex: 1,
  },
  container: {
    flex: 1,
  },
});

export default TodoList;