import { useState } from 'react';
import { Button, Modal, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Card from '../Card/Card';
import CreateTodoModal from '../CreateTodoModal/CreateTodoModal';
import Navbar from '../Navbar/Navbar';
import TodoItemModal from '../TodoItemModal/TodoItemModal';


export default function Main() {
  const [addTodoModalVisible, setAddTodoModalVisible] = useState(false);
  const [todoModalVisible, setTodoModalVisible] = useState(false);
  const [currentID, setCurrentID] = useState();

  const removeTodo = (id) => {
    setTodos(todos.filter((p) => p.id !== id));
  };
  const openTodoModal = (id) => {
    setTodoModalVisible(true);
    setCurrentID(id);
  };

  return (
    <SafeAreaView style={s.mainContainer}>
      <CreateTodoModal
        modalVisible={addTodoModalVisible}
        closeModal={() => setAddTodoModalVisible(false)}
      />
      <TodoItemModal
        visible={todoModalVisible}
        closeModal={() => setTodoModalVisible(false)}
        currentID={currentID}
        removeTodo={removeTodo}
      />
      <View style={s.container}>
        <Card openTodoModal={openTodoModal} />
        <Navbar onPressBtn={() => setAddTodoModalVisible(true)} />
      </View>
    </SafeAreaView>
  );
}

const s = StyleSheet.create({
  container: {
    backgroundColor: '#111',
    flexGrow: 1,
  },
  mainContainer: {
    flexGrow: 1,
    backgroundColor: '#222',
  },
  modal: {},
});
