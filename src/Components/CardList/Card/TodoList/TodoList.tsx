import { FlatList, StyleSheet, View } from 'react-native';
import TodoItem from './TodoItem/TodoItem';
import { EmptyTodoList } from './EmptyTodoList/EmptyTodoList';
import { ITodo } from '../../../../types/types';
import { FC } from 'react';
import { checkIfEveryTodoDone } from '../../../../utils/checkIfEverythingDone';

interface todoListProps {
  todos: ITodo[];
}

const TodoList: FC<todoListProps> = ({ todos, changeCurrentCardId }) => {
  const renderItem = ({ item }) => <TodoItem todo={item} />;
  const LineSeparator = () => (
    <View style={{ marginVertical: 10, width: '100%', height: 1, backgroundColor: '#383838' }} />
  );

  return (
    <View style={s.container}>
      {checkIfEveryTodoDone(todos) ? (
        <EmptyTodoList changeCurrentCardId={changeCurrentCardId} />
      ) : (
        <FlatList
          contentContainerStyle={s.ccStyle}
          data={todos}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          ItemSeparatorComponent={LineSeparator}
        />
      )}
    </View>
  );
};

const s = StyleSheet.create({
  ccStyle: {
    padding: 15,
    flexGrow: 1,
  },
  container: {
    flex: 1,
  },
});

export default TodoList;
