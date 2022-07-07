import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import TodoCheckBox from './TodoCheckBox';
import GlobalStyle from '../../../../../utils/GlobalStyle';
import TodoContextModal from '../../../../../Features/TodoContextModal/TodoContextModal';
import { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleTodoComplete } from '../../../../../redux/todoSlice';
import { ITodo } from '../../../../../types/types';

interface todoItemProps {
  todo: ITodo;
}

const TodoItem: FC<todoItemProps> = ({ todo }) => {
  const [contextVisibility, setContextVisibility] = useState(false);

  const dispatch = useDispatch();
  const toggleState = () => dispatch(toggleTodoComplete({ id: todo.id }));

  return (
    <View>
      <TodoContextModal isVisible={contextVisibility} todo={todo} closeModal={() => setContextVisibility(false)} />
      <TouchableOpacity onPress={() => setContextVisibility(true)} style={styles.content}>
        <TodoCheckBox toggleState={toggleState} completed={todo.completed} />
        <View style={styles.textContent}>
          <View style={styles.titleWrapper}>
            <Text style={[styles.title, !!todo.completed && { color: '#aaa', textDecorationLine: 'line-through' }]}>
              {todo.title}
            </Text>
          </View>
          {todo.desc.length > 0 && !todo.completed && <Text style={[styles.desc]}>{todo.desc}</Text>}
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
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
    lineHeight: 20,
    ...GlobalStyle.Raleway500Font,
    textAlignVertical: 'center',
    color: '#fff',
  },
  desc: {
    fontSize: 16,
    ...GlobalStyle.Raleway400Font,
    marginTop: 5,
    color: '#aaa',
  },
  completed: {
    opacity: 0.4,
  },
});

export default TodoItem;
