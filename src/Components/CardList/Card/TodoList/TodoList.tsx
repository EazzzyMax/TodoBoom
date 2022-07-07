import { FlatList, StyleSheet, View } from 'react-native';
import TodoItem from './TodoItem/TodoItem';
import { EmptyTodoList } from './EmptyTodoList';
import { ITodo } from '../../../../types/types';
import { FC } from 'react';

interface todoListProps {
  todos: ITodo[];
}

const TodoList: FC<todoListProps> = ({ todos }) => {
  const renderItem = ({ item }) => <TodoItem todo={item} />;
  const lineSeparator = () => (
    <View style={{ marginVertical: 10, width: '100%', height: 1, backgroundColor: '#383838' }} />
  );

  if (todos.length > 0) {
    return (
      <View style={s.container}>
        <FlatList
          contentContainerStyle={s.ccStyle}
          data={todos}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          ItemSeparatorComponent={lineSeparator}
        />
      </View>
    );
  } else {
    return <EmptyTodoList></EmptyTodoList>;
  }
};

const s = StyleSheet.create({
  ccStyle: {
    padding: 20,
  },
  container: {
    flex: 1,
  },
});

export default TodoList;
