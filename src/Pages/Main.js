import { useState } from 'react';
import { Button, Modal, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Card from '../Card/Card';
import CreateTodoModal from '../CreateTodoModal/CreateTodoModal';
import Navbar from '../Navbar/Navbar';
import TodoItemModal from '../TodoItemModal/TodoItemModal';

export default function Main() {
  return (
    <SafeAreaView style={s.mainContainer}>
      <CreateTodoModal />
      <TodoItemModal />
      <View style={s.container}>
        <Card />
        <Navbar />
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
